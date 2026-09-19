import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dm1xl7-wa.css';
import '../../css/j/jxryw3brs.css';
import '../../css/c/c2gys6bci.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dm1xl7-wa"/><path class="jxryw3brs"/><path class="c2gys6bci"/></g>`,
		"fallback": "fluent-emoji-flat:pizza",
	});
}

export default Component;
