import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_7jr_bmu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_7jr_bmu"/>`,
		"fallback": "cryptocurrency:poe",
	});
}

export default Component;
