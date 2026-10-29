import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ok-_polxz.css';
import '../../css/a/azxuvfb9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ok-_polxz"/><path class="azxuvfb9k"/>`,
		"fallback": "withicons-bauhaus:menu",
	});
}

export default Component;
