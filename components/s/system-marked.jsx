import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qi9s5wb0k.css';
import '../../css/n/nd1akzb8t.css';
import '../../css/d/dh58scy6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qi9s5wb0k"/><path class="nd1akzb8t"/><path class="dh58scy6f"/></g>`,
		"fallback": "tdesign:system-marked",
	});
}

export default Component;
