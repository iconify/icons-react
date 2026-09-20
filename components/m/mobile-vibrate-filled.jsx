import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjk9j1bmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjk9j1bmt"/>`,
		"fallback": "tdesign:mobile-vibrate-filled",
	});
}

export default Component;
