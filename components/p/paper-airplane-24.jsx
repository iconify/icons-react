import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-h120mpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-h120mpd"/>`,
		"fallback": "octicon:paper-airplane-24",
	});
}

export default Component;
