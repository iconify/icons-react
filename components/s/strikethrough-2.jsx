import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/koy2ms7jb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="koy2ms7jb"/>`,
		"fallback": "ri:strikethrough-2",
	});
}

export default Component;
