import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bxvx0cc-x.css';
import '../../css/g/gtaiscbqc.css';
import '../../css/l/lj8bjt19g.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="bxvx0cc-x"/><path class="gtaiscbqc"/><path class="lj8bjt19g"/></g>`,
		"fallback": "flagpack:pk",
	});
}

export default Component;
