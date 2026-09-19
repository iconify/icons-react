import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arx8vnbbt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="arx8vnbbt"/>`,
		"fallback": "icomoon-free:tv",
	});
}

export default Component;
