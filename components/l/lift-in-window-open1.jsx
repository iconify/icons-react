import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-a25uhrg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-a25uhrg"/>`,
		"fallback": "cbi:lift-in-window-open1",
	});
}

export default Component;
