import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t1d70xb4w.css';
import '../../css/m/mk1c8-btd.css';
import '../../css/r/rn-2ifxvj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t1d70xb4w"/><path class="mk1c8-btd"/><path class="rn-2ifxvj"/></g>`,
		"fallback": "fluent-emoji-flat:old-key",
	});
}

export default Component;
