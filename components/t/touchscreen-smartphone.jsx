import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktvza_ycb.css';
import '../../css/a/ajbc88bet.css';
import '../../css/u/u9db6-ydy.css';
import '../../css/u/uh37wcbdm.css';
import '../../css/s/sj2xbacse.css';
import '../../css/u/uo0cwrbqg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktvza_ycb"/><path class="ajbc88bet"/><circle class="u9db6-ydy"/><circle class="uh37wcbdm"/><circle class="sj2xbacse"/><circle class="uo0cwrbqg"/>`,
		"fallback": "flat-color-icons:touchscreen-smartphone",
	});
}

export default Component;
