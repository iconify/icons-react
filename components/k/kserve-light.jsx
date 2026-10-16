import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yh4dfy4zb.css';
import '../../css/v/v-ne-abrv.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yh4dfy4zb"/><path class="cls-2 v-ne-abrv"/>`,
		"fallback": "thesvg-color:kserve-light",
	});
}

export default Component;
