import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nemux2bfa.css';
import '../../css/b/be53j_awl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nemux2bfa"/><path class="be53j_awl"/></g>`,
		"fallback": "fluent-emoji-high-contrast:newspaper",
	});
}

export default Component;
