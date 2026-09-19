import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ex0eq3b5x.css';
import '../../css/d/dogo5nsjx.css';
import '../../css/z/zmc-ojbbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ex0eq3b5x"/><path class="dogo5nsjx"/><path class="zmc-ojbbx"/>`,
		"fallback": "basil:stack-solid",
	});
}

export default Component;
