import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h32t530tv.css';
import '../../css/n/n9cednr3v.css';
import '../../css/c/c-s9dmbcc.css';
import '../../css/h/hxe0gtkhw.css';
import '../../css/w/wxj73ibaa.css';
import '../../css/u/utkqjrbed.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h32t530tv"/><path class="n9cednr3v"/><path class="c-s9dmbcc"/><path class="hxe0gtkhw"/><path class="wxj73ibaa"/><path class="utkqjrbed"/>`,
		"fallback": "fxemoji:openmouth",
	});
}

export default Component;
