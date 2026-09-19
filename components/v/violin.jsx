import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kp7bhvbbc.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kp7bhvbbc"/>`,
		"fallback": "dinkie-icons:violin",
	});
}

export default Component;
