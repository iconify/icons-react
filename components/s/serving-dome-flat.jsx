import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/a3qq_ib_t.css';
import '../../css/l/l0ed-bcpd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="a3qq_ib_t"/><path class="l0ed-bcpd"/></g>`,
		"fallback": "streamline-color:serving-dome-flat",
	});
}

export default Component;
