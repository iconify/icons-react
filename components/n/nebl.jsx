import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/h8ykdacao.css';
import '../../css/t/t6xf-pbgh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="h8ykdacao"/><path class="t6xf-pbgh"/></g>`,
		"fallback": "cryptocurrency-color:nebl",
	});
}

export default Component;
