import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cg10809pc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cg10809pc"/>`,
		"fallback": "noviair:receipt-clock",
	});
}

export default Component;
