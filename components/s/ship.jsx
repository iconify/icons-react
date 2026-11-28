import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m1-vjp_xd.css';
import '../../css/z/zk92zjb_z.css';
import '../../css/d/dtrgj3edn.css';
import '../../css/u/usaw5gb_y.css';
import '../../css/c/chflpfbrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="m1-vjp_xd"/><path class="zk92zjb_z"/><path class="dtrgj3edn"/><path class="usaw5gb_y"/><path class="chflpfbrw"/></g>`,
		"fallback": "iconaut:ship",
	});
}

export default Component;
