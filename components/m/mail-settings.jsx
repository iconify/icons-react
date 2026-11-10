import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p74anlbhw.css';
import '../../css/h/hpa71hn0a.css';
import '../../css/g/g1j1qqbnq.css';
import '../../css/m/mq9qmd3hi.css';
import '../../css/d/dnx147b0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p74anlbhw"/><circle class="hpa71hn0a"/><path class="g1j1qqbnq"/><path class="mq9qmd3hi"/><path class="dnx147b0h"/></g>`,
		"fallback": "andrsrxn:mail-settings",
	});
}

export default Component;
