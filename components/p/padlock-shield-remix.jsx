import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mr4rj9b-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mr4rj9b-h"/>`,
		"fallback": "streamline-sharp:padlock-shield-remix",
	});
}

export default Component;
