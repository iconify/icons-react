import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eglx9u74k.css';
import '../../css/e/eh7c0pbot.css';
import '../../css/l/lwnjxbt8a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eglx9u74k"/><path class="eh7c0pbot"/><path class="lwnjxbt8a"/></g>`,
		"fallback": "fluent-emoji-flat:pinched-fingers-medium",
	});
}

export default Component;
