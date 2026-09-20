import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tui_wvwks.css';
import '../../css/i/i7bd01w6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tui_wvwks"/><path class="i7bd01w6t"/>`,
		"fallback": "stash:trophy",
	});
}

export default Component;
