import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfg_f7bxl.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/r78i7gkxp.css';
import '../../css/b/bnwu_lbuf.css';
import '../../css/f/fwq3qmi6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary vfg_f7bxl"/><g class="dt0cm9dhy primary"><path class="r78i7gkxp"/><path class="bnwu_lbuf"/><path class="fwq3qmi6h"/></g>`,
		"fallback": "iconaut:lollipop-duo",
	});
}

export default Component;
