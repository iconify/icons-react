import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhp1ik06l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhp1ik06l"/>`,
		"fallback": "keyline-icons:umbrella-off",
	});
}

export default Component;
