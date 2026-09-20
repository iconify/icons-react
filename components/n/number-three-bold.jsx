import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0karrb9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m0karrb9p"/>`,
		"fallback": "streamline-ultimate:number-three-bold",
	});
}

export default Component;
