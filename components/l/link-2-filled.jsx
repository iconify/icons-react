import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nmxf9tbnv.css';
import '../../css/n/n_4r7zbss.css';
import '../../css/g/glbe0wbll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nmxf9tbnv"/><path class="n_4r7zbss"/><path class="glbe0wbll"/></g>`,
		"fallback": "reicon:link-2-filled",
	});
}

export default Component;
