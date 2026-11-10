import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vq5xogb7l.css';
import '../../css/h/hi10uublt.css';
import '../../css/n/nwxjy3b0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vq5xogb7l"/><path class="hi10uublt"/><path class="nwxjy3b0x"/></g>`,
		"fallback": "andrsrxn:microphone-off",
	});
}

export default Component;
