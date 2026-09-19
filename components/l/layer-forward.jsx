import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ahlri2brf.css';
import '../../css/o/oeotaubna.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ahlri2brf"/><path class="oeotaubna"/></g>`,
		"fallback": "bi:layer-forward",
	});
}

export default Component;
