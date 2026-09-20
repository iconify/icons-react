import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyrb38t5a.css';
import '../../css/j/j5891ebpp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyrb38t5a"/><path class="j5891ebpp"/>`,
		"fallback": "streamline-pixel:interface-essential-loading-0-percent-1",
	});
}

export default Component;
