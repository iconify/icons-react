import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qb4srfb6a.css';
import '../../css/f/fy9fm1fke.css';
import '../../css/r/rr1k4fbjx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qb4srfb6a"/><path class="fy9fm1fke"/><path class="rr1k4fbjx"/>`,
		"fallback": "streamline-pixel:interface-essential-dial-pad-2",
	});
}

export default Component;
