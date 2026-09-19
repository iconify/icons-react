import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/as079ac5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="as079ac5r"/>`,
		"fallback": "ci:volume-max",
	});
}

export default Component;
