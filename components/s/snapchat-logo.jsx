import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezfb-7blg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezfb-7blg"/>`,
		"fallback": "streamline-ultimate:snapchat-logo",
	});
}

export default Component;
