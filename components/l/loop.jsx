import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pppldzb5a.css';
import '../../css/y/y71myfbar.css';
import '../../css/c/c_yq6m48d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pppldzb5a"/><path clip-rule="evenodd" class="y71myfbar"/><path class="c_yq6m48d"/></g>`,
		"fallback": "pepicons-print:loop",
	});
}

export default Component;
