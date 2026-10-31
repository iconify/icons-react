import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v11c6jlnw.css';
import '../../css/d/dh0935bbc.css';
import '../../css/s/soey5ibpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v11c6jlnw wm-k"/><path class="dh0935bbc wm-shine"/><path class="soey5ibpc wm-shine"/></g>`,
		"fallback": "withicons-lunar:newspaper",
	});
}

export default Component;
