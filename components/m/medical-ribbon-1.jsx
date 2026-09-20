import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dj2vavymv.css';
import '../../css/k/ke96b69fk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="dj2vavymv"/><path class="ke96b69fk"/></g>`,
		"fallback": "streamline-sharp:medical-ribbon-1",
	});
}

export default Component;
