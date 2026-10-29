import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/wzbdtzo8g.css';
import '../../css/s/sdaucgb_l.css';
import '../../css/f/fb1ki3bup.css';
import '../../css/f/fmvl9jb-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco wzbdtzo8g"/><path class="sdaucgb_l wm-deco"/><path class="fb1ki3bup wm-k"/><path class="fmvl9jb-y wm-a"/></g>`,
		"fallback": "withicons:refrigerator-blueprint",
	});
}

export default Component;
