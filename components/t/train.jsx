import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/n9h46nbry.css';
import '../../css/v/vjwvg5ojq.css';
import '../../css/q/qiqtkwofx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="n9h46nbry"/><path class="vjwvg5ojq"/><path class="qiqtkwofx"/></g>`,
		"fallback": "iconoir:train",
	});
}

export default Component;
