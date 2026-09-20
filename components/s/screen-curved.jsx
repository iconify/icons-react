import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/u2suhjocy.css';
import '../../css/h/h446xvbip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="u2suhjocy"/><path class="h446xvbip"/></g>`,
		"fallback": "streamline-ultimate:screen-curved",
	});
}

export default Component;
