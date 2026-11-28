import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubfu78bmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubfu78bmq"/>`,
		"fallback": "iconaut:shrub-solid",
	});
}

export default Component;
