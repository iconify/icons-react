import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/m/my8qoeb2e.css';
import '../../css/i/ig-cnpbvb.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path class="my8qoeb2e"/><path class="ig-cnpbvb"/></g>`,
		"fallback": "skill-icons:nodejs-light",
	});
}

export default Component;
