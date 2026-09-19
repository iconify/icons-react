import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glcmzy-4i.css';
import '../../css/c/cx7tzdb4j.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="glcmzy-4i"/><path class="cx7tzdb4j"/>`,
		"fallback": "garden:plus-circle-stroke-12",
	});
}

export default Component;
