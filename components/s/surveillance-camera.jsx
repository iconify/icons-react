import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rdwumotqb.css';
import '../../css/n/ntse7sb2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="rdwumotqb"/><path class="ntse7sb2k"/></g>`,
		"fallback": "streamline-sharp:surveillance-camera",
	});
}

export default Component;
