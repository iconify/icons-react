import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wav0n5hso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wav0n5hso"/>`,
		"fallback": "ri:rss-line",
	});
}

export default Component;
