import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ivy2xobuj.css';
import '../../css/k/kih6gmwfp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ivy2xobuj"/><path class="kih6gmwfp"/></g>`,
		"fallback": "fluent-emoji-flat:seedling",
	});
}

export default Component;
