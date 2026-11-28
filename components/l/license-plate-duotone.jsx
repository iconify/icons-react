import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nb9jqsbfr.css';
import '../../css/e/eyn4gabra.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nb9jqsbfr"/><path class="eyn4gabra"/></g>`,
		"fallback": "pullo:license-plate-duotone",
	});
}

export default Component;
