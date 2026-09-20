import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/ng42l8jdq.css';
import '../../css/z/zwl2stbqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ng42l8jdq"/><path class="zwl2stbqz"/></g>`,
		"fallback": "streamline-ultimate:pin-2",
	});
}

export default Component;
