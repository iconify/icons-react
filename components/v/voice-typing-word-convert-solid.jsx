import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4nw3wu7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v4nw3wu7c"/>`,
		"fallback": "streamline-sharp:voice-typing-word-convert-solid",
	});
}

export default Component;
