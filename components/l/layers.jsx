import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvyp8lo5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvyp8lo5j"/>`,
		"fallback": "noviair-light:layers",
	});
}

export default Component;
