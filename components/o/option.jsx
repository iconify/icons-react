import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b5164f7lr.css';
import '../../css/p/py6b5zbjb.css';
import '../../css/y/y59jr9jhx.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b5164f7lr"/><circle class="py6b5zbjb"/><circle class="y59jr9jhx"/></g>`,
		"fallback": "iwwa:option",
	});
}

export default Component;
