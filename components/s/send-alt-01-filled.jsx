import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qntau6e4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qntau6e4q"/>`,
		"fallback": "griddy-icons:send-alt-01-filled",
	});
}

export default Component;
