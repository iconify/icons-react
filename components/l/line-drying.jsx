import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r5dwkvbfp.css';
import '../../css/c/cow0wllnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r5dwkvbfp"/><path class="cow0wllnv"/></g>`,
		"fallback": "ginetex:line-drying",
	});
}

export default Component;
