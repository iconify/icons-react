import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r84escbrd.css';
import '../../css/q/qffwwpzrz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r84escbrd"/><path class="qffwwpzrz"/>`,
		"fallback": "streamline-ultimate:kindle-hold-bold",
	});
}

export default Component;
