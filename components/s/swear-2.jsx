import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g4zs08s-q.css';
import '../../css/e/e72cvwyxg.css';
import '../../css/k/kacv-xbnn.css';
import '../../css/u/ucb2jeb6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g4zs08s-q"/><path class="e72cvwyxg"/><path class="kacv-xbnn"/><path class="ucb2jeb6y"/></g>`,
		"fallback": "tdesign:swear-2",
	});
}

export default Component;
