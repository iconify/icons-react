import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lw8h482ew.css';
import '../../css/b/bf5-e4bot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lw8h482ew"/><path class="bf5-e4bot"/></g>`,
		"fallback": "mage:l-arrow-right-down",
	});
}

export default Component;
