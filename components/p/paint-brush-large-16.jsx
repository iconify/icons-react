import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfydo_bgp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xfydo_bgp"/>`,
		"fallback": "qlementine-icons:paint-brush-large-16",
	});
}

export default Component;
