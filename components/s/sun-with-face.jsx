import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a2kxj3bar.css';
import '../../css/q/q9pd582ie.css';
import '../../css/c/cwqzxbcxy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a2kxj3bar"/><path class="q9pd582ie"/><path class="cwqzxbcxy"/></g>`,
		"fallback": "fluent-emoji-flat:sun-with-face",
	});
}

export default Component;
