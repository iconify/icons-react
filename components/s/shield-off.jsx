import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/d/d0h603b-h.css';
import '../../css/g/gzvhj2enz.css';
import '../../css/c/culmy61wa.css';
import '../../css/y/yr0518bys.css';
import '../../css/v/vvx5zcbvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="d0h603b-h wm-shadow"/><path class="gzvhj2enz wm-shadow"/><path class="culmy61wa"/><path class="yr0518bys"/><path class="vvx5zcbvx wm-s"/></g>`,
		"fallback": "withicons-brutal:shield-off",
	});
}

export default Component;
