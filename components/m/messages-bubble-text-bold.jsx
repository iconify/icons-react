import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxgy6_bot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxgy6_bot"/>`,
		"fallback": "streamline-ultimate:messages-bubble-text-bold",
	});
}

export default Component;
