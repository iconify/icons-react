import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e58pc83mb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e58pc83mb"/>`,
		"fallback": "octicon:sparkles-fill-24",
	});
}

export default Component;
