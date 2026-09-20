import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i1431pb1f.css';
import '../../css/d/d9tifdiqq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i1431pb1f"/><path class="d9tifdiqq"/></g>`,
		"fallback": "streamline-color:moustache",
	});
}

export default Component;
