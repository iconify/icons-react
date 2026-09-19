import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k-0vfrb6n.css';
import '../../css/s/s0p3q6b3u.css';
import '../../css/d/de29zjbhg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k-0vfrb6n"/><path class="s0p3q6b3u"/><path class="de29zjbhg"/></g>`,
		"fallback": "fluent-emoji-flat:raising-hands-medium-dark",
	});
}

export default Component;
