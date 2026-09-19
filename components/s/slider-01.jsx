import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti3pf4j_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ti3pf4j_j"/>`,
		"fallback": "ci:slider-01",
	});
}

export default Component;
