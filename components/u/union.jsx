import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c4osj4jkn.css';
import '../../css/h/hqx1s-dqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="c4osj4jkn"/><path class="hqx1s-dqz"/></g>`,
		"fallback": "iconoir:union",
	});
}

export default Component;
