import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vq4q3mbic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vq4q3mbic"/>`,
		"fallback": "streamline-sharp:peace-symbol-remix",
	});
}

export default Component;
