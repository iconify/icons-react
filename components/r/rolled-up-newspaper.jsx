import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qw5cmrb3p.css';
import '../../css/x/x2_331brn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qw5cmrb3p"/><path class="x2_331brn"/></g>`,
		"fallback": "fluent-emoji-high-contrast:rolled-up-newspaper",
	});
}

export default Component;
