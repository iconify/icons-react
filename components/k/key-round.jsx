import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/in674-o-l.css';
import '../../css/q/q2tz-qbkt.css';
import '../../css/x/xx3p8gb2x.css';
import '../../css/s/s4vap8b1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="in674-o-l wm-shadow"/><path class="q2tz-qbkt wm-shadow"/><path class="xx3p8gb2x"/><path class="s4vap8b1e"/></g>`,
		"fallback": "withicons-brutal:key-round",
	});
}

export default Component;
