import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qf5ej1owf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qf5ej1owf"/>`,
		"fallback": "selfhst:lms-mixtape-dark",
	});
}

export default Component;
