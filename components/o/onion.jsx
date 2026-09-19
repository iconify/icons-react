import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbn2bd74u.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbn2bd74u"/>`,
		"fallback": "dinkie-icons:onion",
	});
}

export default Component;
