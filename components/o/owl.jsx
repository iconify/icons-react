import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l4tjqnb1h.css';
import '../../css/w/weut74b7u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l4tjqnb1h"/><path class="weut74b7u"/></g>`,
		"fallback": "fluent-emoji-high-contrast:owl",
	});
}

export default Component;
