import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/eh55d_b7m.css';
import '../../css/f/fdf1cqbrd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="eh55d_b7m"/><path class="fdf1cqbrd"/></g>`,
		"fallback": "streamline-color:lightbulb-flat",
	});
}

export default Component;
