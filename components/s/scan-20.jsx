import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrz9qccwz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrz9qccwz"/>`,
		"fallback": "energy-icons:scan-20",
	});
}

export default Component;
