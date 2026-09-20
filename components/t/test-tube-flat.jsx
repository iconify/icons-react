import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fpd_cib6j.css';
import '../../css/q/q96u_0b7i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fpd_cib6j"/><path class="q96u_0b7i"/></g>`,
		"fallback": "streamline-color:test-tube-flat",
	});
}

export default Component;
