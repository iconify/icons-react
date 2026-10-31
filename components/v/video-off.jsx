import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qt0vj5e-v.css';
import '../../css/z/zk-rux3bo.css';
import '../../css/a/as_7j1bej.css';
import '../../css/l/lt8rw2lxl.css';
import '../../css/v/vvx5zcbvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="qt0vj5e-v wm-shadow"/><path class="wm-shadow zk-rux3bo"/><path class="as_7j1bej"/><path class="lt8rw2lxl"/><path class="vvx5zcbvx wm-s"/></g>`,
		"fallback": "withicons-brutal:video-off",
	});
}

export default Component;
