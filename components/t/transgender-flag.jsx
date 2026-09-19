import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n8hxk182u.css';
import '../../css/f/fv93obmie.css';
import '../../css/c/c9tst5bhp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="n8hxk182u"/><path clip-rule="evenodd" class="fv93obmie"/><path class="c9tst5bhp"/></g>`,
		"fallback": "fluent-emoji-flat:transgender-flag",
	});
}

export default Component;
