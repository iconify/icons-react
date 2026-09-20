import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqn5fcb5x.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqn5fcb5x"/>`,
		"fallback": "picon:scooter",
	});
}

export default Component;
