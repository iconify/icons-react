import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/xxu1drjvo.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/n/nko2m3b8f.css';
import '../../css/b/bs7aedbba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco xxu1drjvo"/><path class="o7-ag87sb wm-deco"/><path class="nko2m3b8f wm-k"/><path class="bs7aedbba wm-a"/></g>`,
		"fallback": "withicons:surprised-blueprint",
	});
}

export default Component;
