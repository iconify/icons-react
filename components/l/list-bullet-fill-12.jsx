import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w50n8w_nj.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e-lv0wbnb.css';
import '../../css/s/sk2yvlahd.css';
import '../../css/a/albdd0b6k.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w50n8w_nj"/><g class="cuyn6tgcc"><circle class="e-lv0wbnb"/><circle class="sk2yvlahd"/><circle class="albdd0b6k"/></g>`,
		"fallback": "garden:list-bullet-fill-12",
	});
}

export default Component;
