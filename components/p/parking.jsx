import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzz1z6ryv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzz1z6ryv"/>`,
		"fallback": "noviair:parking",
	});
}

export default Component;
