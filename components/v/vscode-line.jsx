import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fen-6uanf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fen-6uanf"/>`,
		"fallback": "mingcute:vscode-line",
	});
}

export default Component;
