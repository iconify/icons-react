import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ic4oz4bwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ic4oz4bwo"/>`,
		"fallback": "simple-icons:paychex",
	});
}

export default Component;
