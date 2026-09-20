import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/epfjlqt3c.css';
import '../../css/u/u_h5i-bfn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="epfjlqt3c"/><path class="u_h5i-bfn"/></g>`,
		"fallback": "streamline-color:passport-flat",
	});
}

export default Component;
