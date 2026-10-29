import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/t/trjyazfbq.css';
import '../../css/v/vezcwbclc.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/j/jd64qhwdo.css';
import '../../css/i/i0u0rnq4a.css';
import '../../css/g/gzv2ifc4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="trjyazfbq wm-deco"/><path class="vezcwbclc wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="jd64qhwdo wm-k"/><path class="i0u0rnq4a wm-a"/><path class="gzv2ifc4k wm-k"/></g>`,
		"fallback": "withicons:message-circle-plus-blueprint",
	});
}

export default Component;
