import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/rts-byo6u.css';
import '../../css/z/zcmg6zw4x.css';
import '../../css/n/nip8kwy2i.css';
import '../../css/v/vnrag9skx.css';
import '../../css/f/f6-esw48z.css';
import '../../css/t/t-j5dzbvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="rts-byo6u wm-deco"/><path class="wm-deco zcmg6zw4x"/><path class="nip8kwy2i wm-deco"/><path class="vnrag9skx wm-k"/><path class="f6-esw48z wm-a"/><path class="t-j5dzbvd wm-a"/></g>`,
		"fallback": "withicons:microphone-blueprint",
	});
}

export default Component;
