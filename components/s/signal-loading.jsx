import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1vx16bco.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1vx16bco"/>`,
		"fallback": "streamline-color:signal-loading",
	});
}

export default Component;
