import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/i_6v_bwkj.css';
import '../../css/i/i78pjnyvl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="i_6v_bwkj"/><path class="i78pjnyvl"/></g>`,
		"fallback": "streamline-flex-color:package-dimension-flat",
	});
}

export default Component;
