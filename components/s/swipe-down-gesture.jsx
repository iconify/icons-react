import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_ufj2b-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_ufj2b-t"/>`,
		"fallback": "iconoir:swipe-down-gesture",
	});
}

export default Component;
