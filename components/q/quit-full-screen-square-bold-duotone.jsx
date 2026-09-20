import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wf89k6buf.css';
import '../../css/u/uy3_f8bob.css';
import '../../css/h/hbnyeyb7b.css';
import '../../css/g/g_zn-7vml.css';
import '../../css/b/bxc0gtbxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wf89k6buf"/><path class="uy3_f8bob"/><path class="hbnyeyb7b"/><path class="g_zn-7vml"/><path class="bxc0gtbxt"/></g>`,
		"fallback": "solar:quit-full-screen-square-bold-duotone",
	});
}

export default Component;
