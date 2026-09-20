import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/e2g7jybbe.css';
import '../../css/h/hku2f-bqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="e2g7jybbe"/><path class="hku2f-bqr"/></g>`,
		"fallback": "streamline-ultimate:medical-app-laptop-1",
	});
}

export default Component;
