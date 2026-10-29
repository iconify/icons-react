import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/co6ufk7zc.css';
import '../../css/r/rgpf1zbjs.css';
import '../../css/y/yo87urbrl.css';
import '../../css/d/d5_gd2mux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="co6ufk7zc"/><path class="rgpf1zbjs wm-shadow"/><path class="yo87urbrl"/><path class="d5_gd2mux"/></g>`,
		"fallback": "withicons:martini-engrave",
	});
}

export default Component;
