import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rub4onbue.css';
import '../../css/l/lq8-84bvl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rub4onbue"/><path class="lq8-84bvl"/></g>`,
		"fallback": "streamline-flex-color:iron-flat",
	});
}

export default Component;
