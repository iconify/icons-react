import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/ak8q7sy8o.css';
import '../../css/h/h_267dbvz.css';
import '../../css/y/y650zr1fk.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ak8q7sy8o"/><path class="h_267dbvz"/><path class="y650zr1fk"/></g>`,
		"fallback": "flagpack:nf",
	});
}

export default Component;
