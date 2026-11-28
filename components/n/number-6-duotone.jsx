import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/guiwvcb9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="guiwvcb9b primary"/>`,
		"fallback": "iconaut:number-6-duotone",
	});
}

export default Component;
