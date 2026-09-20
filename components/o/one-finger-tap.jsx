import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cjmq6jogq.css';
import '../../css/i/i-h79n8ne.css';
import '../../css/t/t4qwofbhw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cjmq6jogq"/><path class="i-h79n8ne"/><path class="t4qwofbhw"/></g>`,
		"fallback": "streamline-flex-color:one-finger-tap",
	});
}

export default Component;
