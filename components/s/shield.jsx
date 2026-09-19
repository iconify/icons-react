import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y2ss9hb6d.css';
import '../../css/s/sf0wjubya.css';
import '../../css/s/s4gz9abla.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y2ss9hb6d"/><path class="sf0wjubya"/><path class="s4gz9abla"/></g>`,
		"fallback": "fluent-emoji-flat:shield",
	});
}

export default Component;
