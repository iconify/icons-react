import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/t/thdslzc1b.css';
import '../../css/f/f038fm58r.css';
import '../../css/y/y5mp_6bzr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="thdslzc1b"/><path class="f038fm58r"/><path class="y5mp_6bzr"/></g>`,
		"fallback": "fluent-emoji-flat:weary-face",
	});
}

export default Component;
