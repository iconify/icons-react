import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rahk9_b2d.css';
import '../../css/x/xjog0ebft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rahk9_b2d"/><path class="xjog0ebft"/>`,
		"fallback": "circum:logout",
	});
}

export default Component;
