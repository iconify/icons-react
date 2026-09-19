import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/red0k8iug.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="red0k8iug"/>`,
		"fallback": "garden:moon-fill-12",
	});
}

export default Component;
