import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tui_wvwks.css';
import '../../css/h/h_xkxebgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tui_wvwks"/><path class="h_xkxebgz"/>`,
		"fallback": "stash:trophy-duotone",
	});
}

export default Component;
