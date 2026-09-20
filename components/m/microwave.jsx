import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w638ubcgv.css';
import '../../css/m/mr_c8lwmj.css';
import '../../css/w/wyg6c9l2g.css';
import '../../css/g/g61oici3g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w638ubcgv"/><path clip-rule="evenodd" class="mr_c8lwmj"/><path class="wyg6c9l2g"/><path class="g61oici3g"/></g>`,
		"fallback": "streamline-color:microwave",
	});
}

export default Component;
