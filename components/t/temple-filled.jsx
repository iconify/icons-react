import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fujky4qvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fujky4qvg"/>`,
		"fallback": "tdesign:temple-filled",
	});
}

export default Component;
