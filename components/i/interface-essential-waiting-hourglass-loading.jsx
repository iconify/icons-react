import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dx22py_3q.css';
import '../../css/p/pbqy1midv.css';
import '../../css/c/cgwmaqb9u.css';
import '../../css/m/ms0kdob0d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dx22py_3q"/><path class="pbqy1midv"/><path class="cgwmaqb9u"/><path class="ms0kdob0d"/>`,
		"fallback": "streamline-pixel:interface-essential-waiting-hourglass-loading",
	});
}

export default Component;
