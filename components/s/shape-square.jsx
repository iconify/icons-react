import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psybx4g9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="psybx4g9s"/>`,
		"fallback": "mdi-light:shape-square",
	});
}

export default Component;
