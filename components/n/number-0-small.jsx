import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qz1z3f7on.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qz1z3f7on"/>`,
		"fallback": "tabler:number-0-small",
	});
}

export default Component;
