import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/za8a9ld3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="za8a9ld3a"/>`,
		"fallback": "griddy-icons:interactive-voice-response-filled",
	});
}

export default Component;
