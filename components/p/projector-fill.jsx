import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/no9xs_bel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="no9xs_bel"/>`,
		"fallback": "mingcute:projector-fill",
	});
}

export default Component;
