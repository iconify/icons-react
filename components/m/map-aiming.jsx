import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g4zs08s-q.css';
import '../../css/n/n8m18bg_u.css';
import '../../css/k/kacv-xbnn.css';
import '../../css/k/ke5n0rbkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g4zs08s-q"/><path class="n8m18bg_u"/><path class="kacv-xbnn"/><path class="ke5n0rbkc"/></g>`,
		"fallback": "tdesign:map-aiming",
	});
}

export default Component;
