import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xcx_74b1t.css';
import '../../css/f/fg82spubh.css';
import '../../css/h/h6odg9b1z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xcx_74b1t"/><path class="fg82spubh"/><path class="h6odg9b1z"/></g>`,
		"fallback": "fluent-emoji-flat:lady-beetle",
	});
}

export default Component;
