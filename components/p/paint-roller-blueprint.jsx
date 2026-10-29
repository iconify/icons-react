import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/jt7qk4eua.css';
import '../../css/g/g_v_p-b4a.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/y/y6b34bbnk.css';
import '../../css/f/fqpodu9zv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="jt7qk4eua wm-deco"/><path class="g_v_p-b4a wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="wm-k y6b34bbnk"/><path class="fqpodu9zv wm-a"/></g>`,
		"fallback": "withicons:paint-roller-blueprint",
	});
}

export default Component;
