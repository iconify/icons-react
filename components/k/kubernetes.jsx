import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tospm4bml.css';
import '../../css/l/lqq-obk3v.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="tospm4bml"/><path class="lqq-obk3v"/></g>`,
		"fallback": "skill-icons:kubernetes",
	});
}

export default Component;
