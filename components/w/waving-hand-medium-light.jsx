import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bn0vpjs_i.css';
import '../../css/a/a4itpjaex.css';
import '../../css/f/fqszj8b9d.css';
import '../../css/m/mhelj70um.css';
import '../../css/i/i0xj7gb-f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bn0vpjs_i"/><path class="a4itpjaex"/><path class="fqszj8b9d"/><path class="mhelj70um"/><path class="i0xj7gb-f"/></g>`,
		"fallback": "fluent-emoji-flat:waving-hand-medium-light",
	});
}

export default Component;
