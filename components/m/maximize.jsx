import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ev45c4b-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ev45c4b-a"/>`,
		"fallback": "noviair-light:maximize",
	});
}

export default Component;
