import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/auzsn3b_x.css';
import '../../css/h/hjfomz99y.css';
import '../../css/b/bmzx_ibhn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="auzsn3b_x"/><path class="hjfomz99y"/><path class="bmzx_ibhn"/></g>`,
		"fallback": "fluent-emoji-flat:scissors",
	});
}

export default Component;
