import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p8lzi6qdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p8lzi6qdp"/>`,
		"fallback": "noviair-light:phone-arrow-right",
	});
}

export default Component;
