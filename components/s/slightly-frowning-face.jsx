import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/t/tzdulab6i.css';
import '../../css/d/dro2vnbmz.css';
import '../../css/f/f4vqt35pe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="tzdulab6i"/><path class="dro2vnbmz"/><path class="f4vqt35pe"/></g>`,
		"fallback": "fluent-emoji-flat:slightly-frowning-face",
	});
}

export default Component;
