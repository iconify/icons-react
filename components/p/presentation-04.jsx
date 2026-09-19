import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pgwf7peyp.css';
import '../../css/m/mi3accbzy.css';
import '../../css/b/bnczibbir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="pgwf7peyp"/><path class="mi3accbzy"/><path class="bnczibbir"/></g>`,
		"fallback": "hugeicons:presentation-04",
	});
}

export default Component;
