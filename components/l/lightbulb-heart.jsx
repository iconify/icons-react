import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dk_4jabvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dk_4jabvj"/>`,
		"fallback": "noviair-light:lightbulb-heart",
	});
}

export default Component;
