import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zepghmc3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zepghmc3v"/>`,
		"fallback": "mingcute:sticker-line",
	});
}

export default Component;
