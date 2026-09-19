import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfk143v7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfk143v7y"/>`,
		"fallback": "iconamoon:number-4-light",
	});
}

export default Component;
