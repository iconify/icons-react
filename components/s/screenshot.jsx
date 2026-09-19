import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yob1mji4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yob1mji4p"/>`,
		"fallback": "bx:screenshot",
	});
}

export default Component;
