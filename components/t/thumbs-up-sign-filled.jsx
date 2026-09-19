import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9zwtnb2n.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g9zwtnb2n"/>`,
		"fallback": "dinkie-icons:thumbs-up-sign-filled",
	});
}

export default Component;
