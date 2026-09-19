import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v_ia9trwh.css';
import '../../css/i/i961peb9z.css';
import '../../css/e/et92v8bqb.css';
import '../../css/h/h5l4vccfp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v_ia9trwh"/><path class="i961peb9z"/><path class="et92v8bqb"/><path class="h5l4vccfp"/></g>`,
		"fallback": "fluent-emoji-flat:trumpet",
	});
}

export default Component;
