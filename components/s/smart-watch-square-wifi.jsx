import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmo9ppb1i.css';
import '../../css/t/t1ugwwbcq.css';
import '../../css/c/ckh91fd6y.css';
import '../../css/l/ltw32c2ui.css';
import '../../css/y/yvwcvyzae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="lmo9ppb1i"><path class="t1ugwwbcq"/><path class="ckh91fd6y"/><path class="ltw32c2ui"/><path class="yvwcvyzae"/></g>`,
		"fallback": "streamline-ultimate-color:smart-watch-square-wifi",
	});
}

export default Component;
