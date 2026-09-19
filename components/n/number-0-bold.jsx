import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixsi4-b-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixsi4-b-a"/>`,
		"fallback": "iconamoon:number-0-bold",
	});
}

export default Component;
