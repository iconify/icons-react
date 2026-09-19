import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/n/n8-ewvv0g.css';
import '../../css/j/jzi4adccz.css';
import '../../css/n/nj3kjxbvt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="n8-ewvv0g"/><path class="jzi4adccz"/><path class="nj3kjxbvt"/></g>`,
		"fallback": "fluent-emoji-flat:loudly-crying-face",
	});
}

export default Component;
