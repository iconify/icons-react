import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jx2q3acyo.css';
import '../../css/b/b9uqax56b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jx2q3acyo"/><path class="b9uqax56b"/></g>`,
		"fallback": "fluent-emoji-flat:plunger",
	});
}

export default Component;
