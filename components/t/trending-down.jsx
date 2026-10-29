import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m4h8h5o3s.css';
import '../../css/j/jk9u2pcha.css';
import '../../css/f/f210u48wn.css';
import '../../css/w/wih7v0yra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m4h8h5o3s wm-k"/><path class="jk9u2pcha wm-k"/><path class="f210u48wn wm-k"/><path class="wih7v0yra wm-shine"/></g>`,
		"fallback": "withicons-anime:trending-down",
	});
}

export default Component;
