import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/or3-8bu1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="or3-8bu1l"/>`,
		"fallback": "mingcute:paster-fill",
	});
}

export default Component;
