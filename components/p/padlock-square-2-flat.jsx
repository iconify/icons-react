import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gfpm_3bzt.css';
import '../../css/b/bddvarb_x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="gfpm_3bzt"/><path class="bddvarb_x"/></g>`,
		"fallback": "streamline-flex-color:padlock-square-2-flat",
	});
}

export default Component;
