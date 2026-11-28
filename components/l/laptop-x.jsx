import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g66f04s7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g66f04s7d"/>`,
		"fallback": "noviair:laptop-x",
	});
}

export default Component;
