import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/roedmt9no.css';
import '../../css/l/l2h7ekg2x.css';
import '../../css/t/te-vwbyvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="roedmt9no"/><path class="l2h7ekg2x"/><path class="te-vwbyvx"/></g>`,
		"fallback": "reicon:wallet-2",
	});
}

export default Component;
