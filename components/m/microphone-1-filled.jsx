import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvk2tb3ud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvk2tb3ud"/>`,
		"fallback": "tdesign:microphone-1-filled",
	});
}

export default Component;
