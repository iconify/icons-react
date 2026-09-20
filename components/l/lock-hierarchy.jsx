import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zeduepbhn.css';
import '../../css/w/wtvgx2i5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zeduepbhn"/><path class="wtvgx2i5e"/></g>`,
		"fallback": "streamline-ultimate:lock-hierarchy",
	});
}

export default Component;
