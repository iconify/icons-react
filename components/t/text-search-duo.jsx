import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vrf0kbclh.css';
import '../../css/g/gz4rmvf3e.css';
import '../../css/w/wtwdiqbwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vrf0kbclh wm-a"/><path class="gz4rmvf3e"/><path class="wm-a wtwdiqbwi"/></g>`,
		"fallback": "withicons:text-search-duo",
	});
}

export default Component;
