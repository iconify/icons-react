import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gu8d-fbzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gu8d-fbzb"/>`,
		"fallback": "streamline-sharp:voice-typing-word-convert-remix",
	});
}

export default Component;
