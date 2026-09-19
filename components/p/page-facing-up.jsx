import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7g7w1efs.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h7g7w1efs"/>`,
		"fallback": "dinkie-icons:page-facing-up",
	});
}

export default Component;
