import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kh9114-ts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kh9114-ts"/>`,
		"fallback": "streamline-sharp:voice-mail-remix",
	});
}

export default Component;
