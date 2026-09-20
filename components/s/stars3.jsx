import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mc8yy0b0m.css';
import '../../css/j/jut4gqbce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mc8yy0b0m"/><path class="jut4gqbce"/></g>`,
		"fallback": "reicon:stars3",
	});
}

export default Component;
