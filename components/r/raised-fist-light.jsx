import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hoetz8dpa.css';
import '../../css/l/lov3ct91m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hoetz8dpa"/><path class="lov3ct91m"/></g>`,
		"fallback": "fluent-emoji-flat:raised-fist-light",
	});
}

export default Component;
