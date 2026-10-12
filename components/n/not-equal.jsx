import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hom_x8bcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hom_x8bcf"/>`,
		"fallback": "andrsrxn:not-equal",
	});
}

export default Component;
