import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pi2xxu4kz.css';
import '../../css/b/btfo-w2vc.css';
import '../../css/f/foq9udbya.css';
import '../../css/f/fv1t98_un.css';
import '../../css/f/f9o0f_bxl.css';
import '../../css/j/jdzrac_6f.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pi2xxu4kz"/><path class="btfo-w2vc"/><path class="foq9udbya"/><path class="fv1t98_un"/><path class="f9o0f_bxl"/><path class="jdzrac_6f"/></g>`,
		"fallback": "streamline-stickies-color:snowman",
	});
}

export default Component;
