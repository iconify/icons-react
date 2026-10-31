import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gfpi4zbgi.css';
import '../../css/q/qgyow-_uj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gfpi4zbgi"/><path class="qgyow-_uj"/></g>`,
		"fallback": "coolicons:voicemail-duotone-round",
	});
}

export default Component;
