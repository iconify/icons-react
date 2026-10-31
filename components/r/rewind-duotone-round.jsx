import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jd0qq9bjp.css';
import '../../css/k/kzgj13umy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jd0qq9bjp"/><path class="kzgj13umy"/></g>`,
		"fallback": "coolicons:rewind-duotone-round",
	});
}

export default Component;
