import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkmw8b3ig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkmw8b3ig"/>`,
		"fallback": "lets-icons:lightning-alt-light",
	});
}

export default Component;
