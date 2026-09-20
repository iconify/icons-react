import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jnepi1cnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jnepi1cnd"/>`,
		"fallback": "streamline-sharp:keyboard",
	});
}

export default Component;
