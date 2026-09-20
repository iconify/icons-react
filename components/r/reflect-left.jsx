import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/h-ilycbei.css';
import '../../css/g/gvovdbb0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="h-ilycbei"/><path class="gvovdbb0v"/></g>`,
		"fallback": "streamline-ultimate:reflect-left",
	});
}

export default Component;
