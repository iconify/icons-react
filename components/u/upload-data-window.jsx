import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vu7xohbjr.css';
import '../../css/s/s44vrbcaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vu7xohbjr"/><path class="s44vrbcaf"/></g>`,
		"fallback": "iconoir:upload-data-window",
	});
}

export default Component;
