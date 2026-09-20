import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tto8q_bgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tto8q_bgd"/>`,
		"fallback": "keyline-icons:settings-dot-fill",
	});
}

export default Component;
