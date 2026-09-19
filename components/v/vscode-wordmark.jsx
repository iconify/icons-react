import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbr94kb0h.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sbr94kb0h"/>`,
		"fallback": "devicon-plain:vscode-wordmark",
	});
}

export default Component;
