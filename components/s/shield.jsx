import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffvcs0yvj.css';

const viewBox = {"width":20,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffvcs0yvj"/>`,
		"fallback": "fontisto:shield",
	});
}

export default Component;
