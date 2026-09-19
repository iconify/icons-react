import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w9124j9il.css';
import '../../css/z/zd4rzkbvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="w9124j9il"/><path class="zd4rzkbvy"/></g>`,
		"fallback": "iconoir:intersect",
	});
}

export default Component;
