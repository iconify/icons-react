import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncp3p2b5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncp3p2b5p"/>`,
		"fallback": "solar:undo-left-round-linear",
	});
}

export default Component;
