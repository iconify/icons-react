import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkgwo8b0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkgwo8b0j"/>`,
		"fallback": "noviair:landscape",
	});
}

export default Component;
