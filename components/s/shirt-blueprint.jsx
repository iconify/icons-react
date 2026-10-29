import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/ai9x4vbke.css';
import '../../css/r/rkw4_db5u.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/i/i8sh5v7sp.css';
import '../../css/j/jrzqn48qw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ai9x4vbke wm-deco"/><path class="rkw4_db5u wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="i8sh5v7sp"/><path class="jrzqn48qw"/></g>`,
		"fallback": "withicons:shirt-blueprint",
	});
}

export default Component;
