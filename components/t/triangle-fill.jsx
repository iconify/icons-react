import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mi8nnxn0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mi8nnxn0n"/>`,
		"fallback": "ri:triangle-fill",
	});
}

export default Component;
