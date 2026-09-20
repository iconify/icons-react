import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu08l1b6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mu08l1b6r"/>`,
		"fallback": "uil:music",
	});
}

export default Component;
