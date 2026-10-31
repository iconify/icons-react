import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jcsgn41ac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jcsgn41ac"/>`,
		"fallback": "sidekickicons:mask",
	});
}

export default Component;
