import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a20z3n5cu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a20z3n5cu"/>`,
		"fallback": "mingcute:more-4-fill",
	});
}

export default Component;
