import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zo3u2eb2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zo3u2eb2w"/>`,
		"fallback": "si:view-compact-line",
	});
}

export default Component;
