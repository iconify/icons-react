import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhb8c01ug.css';
import '../../css/w/w03w98eed.css';
import '../../css/v/vzmjekozx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hhb8c01ug"><path class="w03w98eed"/><path class="vzmjekozx"/></g>`,
		"fallback": "catppuccin:rescript",
	});
}

export default Component;
