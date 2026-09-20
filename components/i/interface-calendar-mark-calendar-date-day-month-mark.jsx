import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gq5mk-mss.css';
import '../../css/g/gz4lvbqjk.css';
import '../../css/i/ibaf-mb8a.css';
import '../../css/f/flh4gv_zw.css';
import '../../css/c/c83o5qmdl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="gq5mk-mss"/><circle class="gz4lvbqjk"/><circle class="ibaf-mb8a"/><circle class="flh4gv_zw"/><circle class="c83o5qmdl"/></g>`,
		"fallback": "streamline:interface-calendar-mark-calendar-date-day-month-mark",
	});
}

export default Component;
