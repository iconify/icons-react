import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/p_lsctszv.css';
import '../../css/r/rjoizpbih.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="p_lsctszv"/><path class="rjoizpbih"/></g>`,
		"fallback": "streamline-color:lift-flat",
	});
}

export default Component;
