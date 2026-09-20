import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcc6e0kab.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mcc6e0kab"/>`,
		"fallback": "selfhst:pulp-project-light",
	});
}

export default Component;
