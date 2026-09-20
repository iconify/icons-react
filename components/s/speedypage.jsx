import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/evo-p5yty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="evo-p5yty"/>`,
		"fallback": "thesvg-color:speedypage",
	});
}

export default Component;
