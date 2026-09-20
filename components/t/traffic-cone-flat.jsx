import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/kyt_kjbdu.css';
import '../../css/l/l36bi4b_i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="kyt_kjbdu"/><path class="l36bi4b_i"/></g>`,
		"fallback": "streamline-color:traffic-cone-flat",
	});
}

export default Component;
