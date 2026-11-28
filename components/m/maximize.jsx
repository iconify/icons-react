import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qz0r-v44t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qz0r-v44t"/>`,
		"fallback": "noviair:maximize",
	});
}

export default Component;
