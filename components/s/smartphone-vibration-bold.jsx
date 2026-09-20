import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s5qdhacbk.css';
import '../../css/n/n4bx4k-yv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="s5qdhacbk"/><path class="n4bx4k-yv"/></g>`,
		"fallback": "solar:smartphone-vibration-bold",
	});
}

export default Component;
