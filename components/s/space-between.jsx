import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzou8zkuc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzou8zkuc"/>`,
		"fallback": "gg:space-between",
	});
}

export default Component;
