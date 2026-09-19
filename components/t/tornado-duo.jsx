import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a0ak6vbrb.css';
import '../../css/c/cyjsd2ifn.css';
import '../../css/f/fwnbb6bnz.css';
import '../../css/t/tpluclbsg.css';
import '../../css/f/fy1p8mbui.css';
import '../../css/c/cs7112bxr.css';
import '../../css/s/sr6vvehzd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a0ak6vbrb"/><path class="cyjsd2ifn"/><path class="fwnbb6bnz"/><path class="tpluclbsg"/><path class="fy1p8mbui"/><path class="cs7112bxr"/><path class="sr6vvehzd"/></g>`,
		"fallback": "glyphs:tornado-duo",
	});
}

export default Component;
