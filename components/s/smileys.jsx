import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yvy2dvbhb.css';
import '../../css/u/u2g8zehxd.css';
import '../../css/o/oakja4bgh.css';
import '../../css/r/rc6gaabib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yvy2dvbhb"/><path class="u2g8zehxd"/><path class="oakja4bgh"/><path class="rc6gaabib"/></g>`,
		"fallback": "reicon:smileys",
	});
}

export default Component;
