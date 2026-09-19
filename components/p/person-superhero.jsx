import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qq66s3b2y.css';
import '../../css/s/smw1df2ga.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qq66s3b2y"/><path class="smw1df2ga"/></g>`,
		"fallback": "fluent-emoji-high-contrast:person-superhero",
	});
}

export default Component;
