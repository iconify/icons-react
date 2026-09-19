import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xtorcbczo.css';
import '../../css/r/rpb1ldb5s.css';
import '../../css/f/f_7w6zt4k.css';
import '../../css/a/abbn_8bhp.css';
import '../../css/h/hftm75boy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xtorcbczo"/><ellipse class="rpb1ldb5s"/><path class="f_7w6zt4k"/><circle class="abbn_8bhp"/><circle class="hftm75boy"/></g>`,
		"fallback": "icon-park-outline:monkey",
	});
}

export default Component;
