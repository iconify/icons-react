import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4e1bibkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4e1bibkq"/>`,
		"fallback": "griddy-icons:thumbs-up",
	});
}

export default Component;
