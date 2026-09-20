import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/og0ot6bql.css';
import '../../css/d/dzp31wl7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="og0ot6bql"/><path class="dzp31wl7l"/>`,
		"fallback": "streamline-ultimate:movies-reel-bold",
	});
}

export default Component;
