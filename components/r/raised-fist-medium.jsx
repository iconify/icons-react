import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bxs4jmbnd.css';
import '../../css/d/dv3ouvfsm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bxs4jmbnd"/><path class="dv3ouvfsm"/></g>`,
		"fallback": "fluent-emoji-flat:raised-fist-medium",
	});
}

export default Component;
