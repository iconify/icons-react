import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ajlf8kbsk.css';
import '../../css/z/zgn55edda.css';
import '../../css/p/p74anlbhw.css';
import '../../css/h/hpa71hn0a.css';
import '../../css/r/rs7fadcaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ajlf8kbsk"/><path class="zgn55edda"/><path class="p74anlbhw"/><circle transform="rotate(-90 19.46 17.7)" class="hpa71hn0a"/><path class="rs7fadcaq"/></g>`,
		"fallback": "andrsrxn:mail-settings",
	});
}

export default Component;
