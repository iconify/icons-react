import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usnj5m19l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="usnj5m19l"/>`,
		"fallback": "noviair-light:wand-check",
	});
}

export default Component;
