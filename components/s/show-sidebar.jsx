import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccm_eobhb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccm_eobhb"/>`,
		"fallback": "zondicons:show-sidebar",
	});
}

export default Component;
