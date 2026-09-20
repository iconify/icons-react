import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ho4qtziaj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ho4qtziaj"/>`,
		"fallback": "selfhst:linkedin-light",
	});
}

export default Component;
