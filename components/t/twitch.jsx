import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhzhsy8bt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhzhsy8bt"/>`,
		"fallback": "bxl:twitch",
	});
}

export default Component;
