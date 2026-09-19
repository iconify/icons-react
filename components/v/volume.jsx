import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xol_1mb-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xol_1mb-d"/>`,
		"fallback": "griddy-icons:volume",
	});
}

export default Component;
