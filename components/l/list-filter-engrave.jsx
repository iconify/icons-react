import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bi-h1cbhh.css';
import '../../css/m/ms02r72gm.css';
import '../../css/m/m9ll0eb5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="bi-h1cbhh"/><path class="ms02r72gm wm-shadow"/><path class="m9ll0eb5n"/></g>`,
		"fallback": "withicons:list-filter-engrave",
	});
}

export default Component;
