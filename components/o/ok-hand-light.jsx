import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vf3f31i-m.css';
import '../../css/o/o6zpkac2l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vf3f31i-m"/><path class="o6zpkac2l"/></g>`,
		"fallback": "fluent-emoji-flat:ok-hand-light",
	});
}

export default Component;
