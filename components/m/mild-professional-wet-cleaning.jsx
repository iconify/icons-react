import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gvhlp8bsj.css';
import '../../css/w/wxw5rwbey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gvhlp8bsj"/><path class="wxw5rwbey"/></g>`,
		"fallback": "ginetex:mild-professional-wet-cleaning",
	});
}

export default Component;
