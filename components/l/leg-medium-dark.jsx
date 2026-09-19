import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jmxfzwnrh.css';
import '../../css/k/knysgqb2l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jmxfzwnrh"/><path class="knysgqb2l"/></g>`,
		"fallback": "fluent-emoji-flat:leg-medium-dark",
	});
}

export default Component;
