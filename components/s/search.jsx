import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gnzekqbpq.css';
import '../../css/m/m4w0vq-oc.css';

const viewBox = {"width":33,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gnzekqbpq"/><path class="m4w0vq-oc"/></g>`,
		"fallback": "et:search",
	});
}

export default Component;
