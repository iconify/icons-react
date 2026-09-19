import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aimve_b7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aimve_b7l"/>`,
		"fallback": "griddy-icons:lock-open-filled",
	});
}

export default Component;
