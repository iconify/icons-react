import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ufbn9gbus.css';
import '../../css/l/lbyekyb9f.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="ufbn9gbus"/><path class="lbyekyb9f"/></g>`,
		"fallback": "skill-icons:rails",
	});
}

export default Component;
