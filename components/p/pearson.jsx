import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iecc9yb7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iecc9yb7t"/>`,
		"fallback": "thesvg-color:pearson",
	});
}

export default Component;
