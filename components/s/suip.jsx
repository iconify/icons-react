import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh7ww0b7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh7ww0b7c"/>`,
		"fallback": "token:suip",
	});
}

export default Component;
