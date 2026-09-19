import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qpmsjsqtn.css';
import '../../css/y/yk0ygoo7y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qpmsjsqtn"/><path class="yk0ygoo7y"/></g>`,
		"fallback": "fluent-emoji-high-contrast:potato",
	});
}

export default Component;
