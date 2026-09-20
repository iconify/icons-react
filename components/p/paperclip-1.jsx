import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu8amwuqg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fu8amwuqg"/>`,
		"fallback": "streamline-color:paperclip-1",
	});
}

export default Component;
