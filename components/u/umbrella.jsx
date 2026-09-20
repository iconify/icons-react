import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnsu8pbcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnsu8pbcj"/>`,
		"fallback": "uil:umbrella",
	});
}

export default Component;
