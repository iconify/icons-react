import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/geb8sxbml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="geb8sxbml"/>`,
		"fallback": "mdi:outdoor-light",
	});
}

export default Component;
