import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/djt3qyt3e.css';
import '../../css/b/b8n4c6biy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="djt3qyt3e"/><path class="b8n4c6biy"/></g>`,
		"fallback": "iconoir:multi-bubble",
	});
}

export default Component;
