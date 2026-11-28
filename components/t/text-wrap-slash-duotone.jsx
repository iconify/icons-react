import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bn2u3fm0i.css';
import '../../css/g/gur-plb-h.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bn2u3fm0i"/><path class="gur-plb-h"/></g>`,
		"fallback": "pullo:text-wrap-slash-duotone",
	});
}

export default Component;
