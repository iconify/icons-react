import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwtt7-lhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwtt7-lhj"/>`,
		"fallback": "gg:menu-grid-o",
	});
}

export default Component;
