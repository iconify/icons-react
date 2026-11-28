import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hytede6zc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hytede6zc"/>`,
		"fallback": "noviair-light:shoe",
	});
}

export default Component;
