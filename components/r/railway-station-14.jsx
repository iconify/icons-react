import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pd0hb1b-w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pd0hb1b-w"/>`,
		"fallback": "osmic:railway-station-14",
	});
}

export default Component;
