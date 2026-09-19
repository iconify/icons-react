import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w6ss5oxsf.css';
import '../../css/i/ix4vl_b_u.css';
import '../../css/x/xbd7wwzmz.css';
import '../../css/q/q01-6ebhb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w6ss5oxsf"/><path class="ix4vl_b_u"/><path class="xbd7wwzmz"/><path class="q01-6ebhb"/></g>`,
		"fallback": "fluent-emoji-flat:watermelon",
	});
}

export default Component;
