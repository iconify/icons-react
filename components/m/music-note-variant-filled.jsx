import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbivq1bzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbivq1bzu"/>`,
		"fallback": "reicon:music-note-variant-filled",
	});
}

export default Component;
