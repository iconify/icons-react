import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt-rfw8yt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yt-rfw8yt"/>`,
		"fallback": "energy-icons:navigation-48",
	});
}

export default Component;
