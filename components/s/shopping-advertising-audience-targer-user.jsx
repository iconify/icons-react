import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vxiausr2q.css';
import '../../css/n/n34_73bhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vxiausr2q"/><path class="n34_73bhi"/></g>`,
		"fallback": "streamline-ultimate:shopping-advertising-audience-targer-user",
	});
}

export default Component;
