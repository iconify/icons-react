import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w48m7-bwv.css';
import '../../css/r/r4-mswj9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w48m7-bwv"/><path class="r4-mswj9b"/>`,
		"fallback": "token:mod",
	});
}

export default Component;
