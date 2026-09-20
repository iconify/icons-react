import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7gjx6cup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7gjx6cup"/>`,
		"fallback": "mdi:music-clef-tenor",
	});
}

export default Component;
