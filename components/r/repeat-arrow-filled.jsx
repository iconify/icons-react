import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n22-7p18b.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n22-7p18b"/>`,
		"fallback": "dinkie-icons:repeat-arrow-filled",
	});
}

export default Component;
