import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6yqdssfg.css';
import '../../css/k/kyfg5ffjz.css';
import '../../css/c/ch-h2szyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a6yqdssfg"/><path class="kyfg5ffjz"/><path class="ch-h2szyi"/></g>`,
		"fallback": "iconamoon:shopping-card-remove-thin",
	});
}

export default Component;
