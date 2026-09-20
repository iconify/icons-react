import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mglg5wb7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mglg5wb7f"/>`,
		"fallback": "mdi:taco",
	});
}

export default Component;
