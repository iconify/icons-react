import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h10oigbig.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h10oigbig"/>`,
		"fallback": "energy-icons:skis-48-bold",
	});
}

export default Component;
