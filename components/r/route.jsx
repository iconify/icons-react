import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrtjap9eu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrtjap9eu"/>`,
		"fallback": "fa6-solid:route",
	});
}

export default Component;
