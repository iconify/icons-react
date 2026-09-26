import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o5diid9zm.css';
import '../../css/c/cbr-qib7h.css';
import '../../css/s/s169cvnfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o5diid9zm"/><path class="cbr-qib7h"/><path class="s169cvnfz"/></g>`,
		"fallback": "solar:panels-top-right-bold-duotone",
	});
}

export default Component;
