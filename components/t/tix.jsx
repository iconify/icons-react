import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt1yq4quw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dt1yq4quw"/>`,
		"fallback": "cryptocurrency:tix",
	});
}

export default Component;
