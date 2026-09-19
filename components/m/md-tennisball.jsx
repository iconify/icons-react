import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7m911b_b.css';
import '../../css/j/jrn4e4b1s.css';
import '../../css/f/fxcjnopxo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7m911b_b"/><path class="jrn4e4b1s"/><path class="fxcjnopxo"/>`,
		"fallback": "ion:md-tennisball",
	});
}

export default Component;
