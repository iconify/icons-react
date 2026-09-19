import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-crd-fry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-crd-fry"/>`,
		"fallback": "griddy-icons:play",
	});
}

export default Component;
