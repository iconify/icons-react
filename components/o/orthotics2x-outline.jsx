import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k0bcm1w4w.css';
import '../../css/b/bkwvl7bhu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k0bcm1w4w"/><path class="bkwvl7bhu"/></g>`,
		"fallback": "healthicons:orthotics2x-outline",
	});
}

export default Component;
