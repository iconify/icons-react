import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlws5-bvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dlws5-bvz"/>`,
		"fallback": "noviair:projector-check",
	});
}

export default Component;
