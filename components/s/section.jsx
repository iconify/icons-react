import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-g_2jb0j.css';

const viewBox = {"width":256,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-g_2jb0j"/>`,
		"fallback": "fa6-solid:section",
	});
}

export default Component;
