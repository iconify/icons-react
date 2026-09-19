import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jubo05bwj.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jubo05bwj"/>`,
		"fallback": "fontisto:line-chart",
	});
}

export default Component;
