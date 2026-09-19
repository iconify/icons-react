import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x1dnrtggq.css';
import '../../css/j/jbbfs_85r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x1dnrtggq"/><path class="jbbfs_85r"/></g>`,
		"fallback": "fluent-emoji-high-contrast:notebook-with-decorative-cover",
	});
}

export default Component;
