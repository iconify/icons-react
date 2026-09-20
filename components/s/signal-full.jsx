import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xysgv6bqv.css';
import '../../css/a/aoch5_f4q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xysgv6bqv"/><path class="aoch5_f4q"/></g>`,
		"fallback": "streamline-color:signal-full",
	});
}

export default Component;
