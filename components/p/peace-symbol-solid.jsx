import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z_74r4b9l.css';
import '../../css/j/jesingqer.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z_74r4b9l"/><path class="jesingqer"/></g>`,
		"fallback": "stash:peace-symbol-solid",
	});
}

export default Component;
