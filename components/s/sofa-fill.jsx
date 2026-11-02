import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anarf_b9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anarf_b9v"/>`,
		"fallback": "mingcute:sofa-fill",
	});
}

export default Component;
