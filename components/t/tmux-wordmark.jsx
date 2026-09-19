import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7dnjsbge.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7dnjsbge"/>`,
		"fallback": "devicon-plain:tmux-wordmark",
	});
}

export default Component;
