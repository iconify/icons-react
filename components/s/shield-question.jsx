import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jase8vblh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jase8vblh"/>`,
		"fallback": "noviair-light:shield-question",
	});
}

export default Component;
