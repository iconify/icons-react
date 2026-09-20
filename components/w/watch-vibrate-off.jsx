import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ab2wita7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ab2wita7j"/>`,
		"fallback": "mdi:watch-vibrate-off",
	});
}

export default Component;
