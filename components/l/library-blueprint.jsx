import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/lqyf9ccow.css';
import '../../css/z/zw48p_m5a.css';
import '../../css/v/v5jdyxbhx.css';
import '../../css/i/iagn37brf.css';
import '../../css/g/gfnqhtbkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="lqyf9ccow wm-deco"/><path class="wm-deco zw48p_m5a"/><path class="v5jdyxbhx wm-deco"/><path class="iagn37brf wm-k"/><path class="gfnqhtbkm wm-a"/></g>`,
		"fallback": "withicons:library-blueprint",
	});
}

export default Component;
