import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mrte8tbdb.css';
import '../../css/o/oryfwuh6y.css';
import '../../css/d/dm____bki.css';
import '../../css/w/whhmzyuxo.css';
import '../../css/y/y_x49ub9l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mrte8tbdb"/><path class="oryfwuh6y"/><path class="dm____bki"/><path class="whhmzyuxo"/><path class="y_x49ub9l"/></g>`,
		"fallback": "fluent-emoji-flat:taco",
	});
}

export default Component;
