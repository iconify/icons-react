import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lj10p5rzw.css';
import '../../css/b/bmckwmrqx.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lj10p5rzw"/><path class="bmckwmrqx"/>`,
		"fallback": "ep:open",
	});
}

export default Component;
