import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qwfrxvkcw.css';
import '../../css/t/tx8aa7bfg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qwfrxvkcw"/><path class="tx8aa7bfg"/></g>`,
		"fallback": "fluent-emoji-flat:victory-hand-medium-light",
	});
}

export default Component;
