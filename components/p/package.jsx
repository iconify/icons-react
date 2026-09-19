import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iaa6_29ea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iaa6_29ea"/>`,
		"fallback": "griddy-icons:package",
	});
}

export default Component;
