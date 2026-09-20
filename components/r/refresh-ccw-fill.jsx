import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mg8-oacpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mg8-oacpo"/>`,
		"fallback": "keyline-icons:refresh-ccw-fill",
	});
}

export default Component;
