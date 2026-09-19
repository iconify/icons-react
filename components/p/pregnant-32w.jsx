import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p21j9tb-i.css';
import '../../css/v/v3jd2ibls.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p21j9tb-i"/><path class="v3jd2ibls"/></g>`,
		"fallback": "healthicons:pregnant-32w",
	});
}

export default Component;
