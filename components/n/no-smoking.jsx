import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dj67aulkh.css';
import '../../css/v/vnp1-m4if.css';
import '../../css/p/pget4blue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="dj67aulkh"/><path class="vnp1-m4if"/><path class="pget4blue"/></g>`,
		"fallback": "iconoir:no-smoking",
	});
}

export default Component;
