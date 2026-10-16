import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eg_2veb3s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eg_2veb3s"/>`,
		"fallback": "energy-icons:moonrise-48-bold",
	});
}

export default Component;
