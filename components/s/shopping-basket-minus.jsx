import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uu49r2jkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uu49r2jkc"/>`,
		"fallback": "griddy-icons:shopping-basket-minus",
	});
}

export default Component;
