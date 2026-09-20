import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cxzlycbfj.css';
import '../../css/c/ckk9d1fqg.css';
import '../../css/k/k_0is30km.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cxzlycbfj"/><path class="ckk9d1fqg"/><path class="k_0is30km"/></g>`,
		"fallback": "solar:rewind-back-circle-bold-duotone",
	});
}

export default Component;
