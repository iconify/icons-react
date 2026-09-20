import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mz37ntb0d.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mz37ntb0d"/>`,
		"fallback": "picon:previous",
	});
}

export default Component;
