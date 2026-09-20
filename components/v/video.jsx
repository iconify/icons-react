import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t93rr5s2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t93rr5s2l"/>`,
		"fallback": "pixelarticons:video",
	});
}

export default Component;
