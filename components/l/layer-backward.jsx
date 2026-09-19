import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k8mbtjnbh.css';
import '../../css/s/snfd5qbjj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k8mbtjnbh"/><path class="snfd5qbjj"/></g>`,
		"fallback": "bi:layer-backward",
	});
}

export default Component;
