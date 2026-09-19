import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ro2baj38j.css';
import '../../css/h/hyqway70q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ro2baj38j"/><path class="hyqway70q"/></g>`,
		"fallback": "fluent-emoji-flat:raised-hand-medium",
	});
}

export default Component;
