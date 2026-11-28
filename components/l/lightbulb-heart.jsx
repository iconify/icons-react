import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tf7tr2b7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tf7tr2b7n"/>`,
		"fallback": "noviair:lightbulb-heart",
	});
}

export default Component;
