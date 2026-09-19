import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sk-h9b3te.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sk-h9b3te"/>`,
		"fallback": "dinkie-icons:umbrella-on-ground",
	});
}

export default Component;
