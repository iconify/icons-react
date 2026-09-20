import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wwe7b0qjf.css';
import '../../css/j/jul_2tu9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wwe7b0qjf"/><path class="jul_2tu9k"/></g>`,
		"fallback": "streamline-ultimate:smart-watch-square-download",
	});
}

export default Component;
