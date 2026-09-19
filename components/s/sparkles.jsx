import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eo9u2iago.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eo9u2iago"/>`,
		"fallback": "dinkie-icons:sparkles",
	});
}

export default Component;
