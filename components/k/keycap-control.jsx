import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kp1d3mbcm.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kp1d3mbcm"/>`,
		"fallback": "dinkie-icons:keycap-control",
	});
}

export default Component;
