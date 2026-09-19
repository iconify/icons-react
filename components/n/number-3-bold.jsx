import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dne2lqbne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dne2lqbne"/>`,
		"fallback": "iconamoon:number-3-bold",
	});
}

export default Component;
