import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lw-zpcb1q.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lw-zpcb1q"/>`,
		"fallback": "dinkie-icons:size-emoji-small",
	});
}

export default Component;
