import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vk-5y_bju.css';
import '../../css/d/d8wq0_o1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vk-5y_bju"/><path class="d8wq0_o1w"/></g>`,
		"fallback": "covid:mutation-temperature-change",
	});
}

export default Component;
