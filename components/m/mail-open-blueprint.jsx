import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/iujn64mjt.css';
import '../../css/m/m_pasbhxf.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/y/yzh737bhw.css';
import '../../css/q/q6s4yvbqv.css';
import '../../css/z/z7fuhj0ov.css';
import '../../css/a/albw7qb1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="iujn64mjt wm-deco"/><path class="m_pasbhxf wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="wm-k yzh737bhw"/><path class="q6s4yvbqv wm-a"/><path class="wm-k z7fuhj0ov"/><path class="albw7qb1i wm-a"/></g>`,
		"fallback": "withicons:mail-open-blueprint",
	});
}

export default Component;
