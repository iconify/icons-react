import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rue6bqb4r.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rue6bqb4r"/>`,
		"fallback": "dinkie-icons:pill-filled",
	});
}

export default Component;
