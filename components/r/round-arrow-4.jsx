import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbobdk3yv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbobdk3yv"/>`,
		"fallback": "subway:round-arrow-4",
	});
}

export default Component;
