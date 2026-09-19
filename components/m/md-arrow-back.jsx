import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gx6re6bjf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gx6re6bjf"/>`,
		"fallback": "ion:md-arrow-back",
	});
}

export default Component;
