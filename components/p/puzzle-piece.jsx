import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fiyqsjbqv.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fiyqsjbqv"/>`,
		"fallback": "fa-solid:puzzle-piece",
	});
}

export default Component;
