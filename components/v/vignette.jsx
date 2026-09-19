import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ysjxyibud.css';
import '../../css/h/hipmx6vje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ysjxyibud"/><path class="hipmx6vje"/>`,
		"fallback": "boxicons:vignette",
	});
}

export default Component;
