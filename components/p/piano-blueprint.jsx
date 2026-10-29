import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/lu645yb-f.css';
import '../../css/g/g2xclxbug.css';
import '../../css/o/o7j3up99f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="lu645yb-f wm-deco"/><path class="g2xclxbug wm-deco"/><path class="o7j3up99f"/></g>`,
		"fallback": "withicons:piano-blueprint",
	});
}

export default Component;
