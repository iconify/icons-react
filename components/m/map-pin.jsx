import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/iulpltu0r.css';
import '../../css/z/zr9bdwb4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="iulpltu0r"/><path class="zr9bdwb4t"/></g>`,
		"fallback": "heroicons:map-pin",
	});
}

export default Component;
