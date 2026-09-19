import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vo6f34bpk.css';
import '../../css/x/xy9bvyb3v.css';
import '../../css/r/r51-_908r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="vo6f34bpk"/><path class="xy9bvyb3v"/><path class="r51-_908r"/></g>`,
		"fallback": "iconoir:reminder-hand-gesture",
	});
}

export default Component;
