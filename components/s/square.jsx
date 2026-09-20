import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkuw3r.css';
import '../../css/s/so-from-66.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkuw3r"/>`,
		"fallback": "line-md:square",
	});
}

export default Component;
