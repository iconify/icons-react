import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd9weybkk.css';
import '../../css/o/ozqz5s-cs.css';
import '../../css/r/rwfsknbjx.css';
import '../../css/d/d5vmwq5nj.css';

const viewBox = {"width":1452,"height":1811};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bd9weybkk"><path class="ozqz5s-cs"/><path class="rwfsknbjx"/><path class="d5vmwq5nj"/></g>`,
		"fallback": "thesvg-color:intello-dark",
	});
}

export default Component;
