import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/odbfh8bkk.css';
import '../../css/x/xkzk0rgrd.css';
import '../../css/m/m6prnpbep.css';
import '../../css/h/h0r-wpbtz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="odbfh8bkk"/><path clip-rule="evenodd" class="xkzk0rgrd"/><path class="m6prnpbep"/><path class="h0r-wpbtz"/></g>`,
		"fallback": "fluent-emoji-high-contrast:person-genie",
	});
}

export default Component;
