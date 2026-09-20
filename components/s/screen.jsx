import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/h3goysbmy.css';
import '../../css/g/g50np5bge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="h3goysbmy"/><path class="g50np5bge"/></g>`,
		"fallback": "streamline-ultimate:screen",
	});
}

export default Component;
