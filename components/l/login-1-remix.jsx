import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr0qerk8j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tr0qerk8j"/>`,
		"fallback": "streamline:login-1-remix",
	});
}

export default Component;
