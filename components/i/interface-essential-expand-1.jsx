import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to9lmzkqp.css';
import '../../css/i/ittwa03gj.css';
import '../../css/x/xvd4abccd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="to9lmzkqp"/><path class="ittwa03gj"/><path class="xvd4abccd"/>`,
		"fallback": "streamline-pixel:interface-essential-expand-1",
	});
}

export default Component;
