import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yubgi-0bi.css';
import '../../css/e/e_ce5r8oh.css';
import '../../css/e/ehhfdwnok.css';
import '../../css/i/i3j_-xb4h.css';
import '../../css/b/bd20qcbyz.css';
import '../../css/m/mzve6i0yk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yubgi-0bi"/><path class="e_ce5r8oh"/><path class="ehhfdwnok"/><path class="i3j_-xb4h"/><path class="bd20qcbyz"/><path class="mzve6i0yk"/>`,
		"fallback": "fxemoji:spaghetti",
	});
}

export default Component;
