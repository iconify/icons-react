import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ingnvbcuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ingnvbcuw"/>`,
		"fallback": "ri:music-2-line",
	});
}

export default Component;
