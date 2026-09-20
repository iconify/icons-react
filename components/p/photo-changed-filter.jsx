import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qgk6_nboh.css';
import '../../css/q/qwvdd4wrx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qgk6_nboh"/><path class="qwvdd4wrx"/></g>`,
		"fallback": "streamline-ultimate:photo-changed-filter",
	});
}

export default Component;
