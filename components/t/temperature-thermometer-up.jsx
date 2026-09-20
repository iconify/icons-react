import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/he6u6pbvf.css';
import '../../css/j/j0wdbrx5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="he6u6pbvf"/><path class="j0wdbrx5z"/></g>`,
		"fallback": "streamline-ultimate:temperature-thermometer-up",
	});
}

export default Component;
