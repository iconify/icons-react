import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7px52pza.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7px52pza"/>`,
		"fallback": "streamline-flex:timer-zero",
	});
}

export default Component;
