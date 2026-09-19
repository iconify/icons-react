import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/l3guqjqch.css';
import '../../css/w/wombppblx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="l3guqjqch"/><path class="wombppblx"/></g>`,
		"fallback": "hugeicons:package-check",
	});
}

export default Component;
