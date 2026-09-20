import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmgjq6fmk.css';
import '../../css/t/t9hsh_ubw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmgjq6fmk"/><path class="t9hsh_ubw"/>`,
		"fallback": "streamline-pixel:interface-essential-lock",
	});
}

export default Component;
