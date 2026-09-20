import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qkhepdg4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qkhepdg4b"/>`,
		"fallback": "keyline-icons:toggles-sharp-fill",
	});
}

export default Component;
