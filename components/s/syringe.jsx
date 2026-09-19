import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r042qtb1w.css';
import '../../css/k/k_2k-fkox.css';
import '../../css/h/h7btmc92c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="r042qtb1w"/><path class="k_2k-fkox"/><path class="h7btmc92c"/></g>`,
		"fallback": "pepicons:syringe",
	});
}

export default Component;
