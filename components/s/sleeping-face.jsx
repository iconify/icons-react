import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/d/d-9xesb6k.css';
import '../../css/x/x6vdqnbjh.css';
import '../../css/v/vpp7lhq5m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="d-9xesb6k"/><path class="x6vdqnbjh"/><path class="vpp7lhq5m"/></g>`,
		"fallback": "fluent-emoji-flat:sleeping-face",
	});
}

export default Component;
