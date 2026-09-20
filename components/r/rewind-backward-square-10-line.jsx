import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzd8yibya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzd8yibya"/>`,
		"fallback": "mingcute:rewind-backward-square-10-line",
	});
}

export default Component;
