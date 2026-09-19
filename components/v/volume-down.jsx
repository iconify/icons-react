import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7o-o3clb.css';

const viewBox = {"width":1152,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7o-o3clb"/>`,
		"fallback": "fa:volume-down",
	});
}

export default Component;
