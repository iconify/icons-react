import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rra9mob5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rra9mob5x"/>`,
		"fallback": "simple-icons:oclif",
	});
}

export default Component;
