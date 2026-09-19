import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f9apszbzh.css';
import '../../css/x/x-t5qxbzm.css';
import '../../css/i/ibuyixdlq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f9apszbzh"/><path class="x-t5qxbzm"/><path class="ibuyixdlq"/></g>`,
		"fallback": "fluent-emoji-flat:test-tube",
	});
}

export default Component;
