import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jh6oaebkp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jh6oaebkp"/>`,
		"fallback": "noviair-light:network",
	});
}

export default Component;
