import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsbym-9ml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsbym-9ml"/>`,
		"fallback": "keyline-icons:temperature-quarter-fill",
	});
}

export default Component;
