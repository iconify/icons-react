import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/j5w4-tbxv.css';
import '../../css/b/b_pdoyv2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="j5w4-tbxv"/><path class="b_pdoyv2f"/></g>`,
		"fallback": "streamline-sharp-color:tree-3-flat",
	});
}

export default Component;
