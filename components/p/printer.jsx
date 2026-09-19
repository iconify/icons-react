import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3e8648ws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3e8648ws"/>`,
		"fallback": "guidance:printer",
	});
}

export default Component;
