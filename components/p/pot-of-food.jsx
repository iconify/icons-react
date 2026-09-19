import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a67_0mbsv.css';
import '../../css/j/jgdkkebat.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a67_0mbsv"/><path class="jgdkkebat"/></g>`,
		"fallback": "fluent-emoji-high-contrast:pot-of-food",
	});
}

export default Component;
