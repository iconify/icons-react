import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hiodt7tvz.css';
import '../../css/d/durgikbxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hiodt7tvz"/><path class="durgikbxy"/></g>`,
		"fallback": "iconoir:search-window",
	});
}

export default Component;
