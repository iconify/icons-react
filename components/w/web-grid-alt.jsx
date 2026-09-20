import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fj86m0dbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fj86m0dbi"/>`,
		"fallback": "uis:web-grid-alt",
	});
}

export default Component;
