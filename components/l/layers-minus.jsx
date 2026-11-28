import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u61-btb-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u61-btb-b"/>`,
		"fallback": "noviair-light:layers-minus",
	});
}

export default Component;
