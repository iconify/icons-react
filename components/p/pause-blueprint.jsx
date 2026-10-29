import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/jd59erb6t.css';
import '../../css/a/a3k-1f3du.css';
import '../../css/x/xv2fgjbuo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="jd59erb6t wm-deco"/><path class="a3k-1f3du wm-deco"/><path class="xv2fgjbuo"/></g>`,
		"fallback": "withicons:pause-blueprint",
	});
}

export default Component;
