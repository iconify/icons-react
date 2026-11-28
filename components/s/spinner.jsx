import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrx7p7gdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrx7p7gdl"/>`,
		"fallback": "noviair-light:spinner",
	});
}

export default Component;
