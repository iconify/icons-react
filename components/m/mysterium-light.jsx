import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/er6pr1qjj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="er6pr1qjj"/>`,
		"fallback": "selfhst:mysterium-light",
	});
}

export default Component;
