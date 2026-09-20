import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_s8-1u6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_s8-1u6i"/>`,
		"fallback": "mdi-light:shape-rhombus",
	});
}

export default Component;
