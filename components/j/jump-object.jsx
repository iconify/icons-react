import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i7m7xip3s.css';
import '../../css/l/l9dl06b1q.css';
import '../../css/s/sd4mglwqq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i7m7xip3s"/><path class="l9dl06b1q"/><path class="sd4mglwqq"/></g>`,
		"fallback": "streamline-color:jump-object",
	});
}

export default Component;
