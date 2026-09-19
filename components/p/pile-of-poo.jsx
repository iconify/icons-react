import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rs--ucbvl.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rs--ucbvl"/>`,
		"fallback": "dinkie-icons:pile-of-poo",
	});
}

export default Component;
