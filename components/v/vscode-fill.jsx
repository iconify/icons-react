import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idi-7cb1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="idi-7cb1u"/>`,
		"fallback": "mingcute:vscode-fill",
	});
}

export default Component;
