import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dzwjvva5h.css';
import '../../css/d/dianddcsu.css';
import '../../css/o/ovtl0ejmi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dzwjvva5h"/><path class="dianddcsu"/><path class="ovtl0ejmi"/></g>`,
		"fallback": "fluent-emoji-high-contrast:scientist",
	});
}

export default Component;
