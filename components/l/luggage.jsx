import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/di7205bgb.css';
import '../../css/j/jd-n5bc_b.css';
import '../../css/g/gt65h22tq.css';
import '../../css/h/h0s5wccqo.css';
import '../../css/t/therzxb5l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="di7205bgb"/><path clip-rule="evenodd" class="jd-n5bc_b"/><path class="gt65h22tq"/><path clip-rule="evenodd" class="h0s5wccqo"/><path class="therzxb5l"/></g>`,
		"fallback": "fluent-emoji-flat:luggage",
	});
}

export default Component;
