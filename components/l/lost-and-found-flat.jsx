import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dwt_j-bnu.css';
import '../../css/v/vhc7t7bkn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="dwt_j-bnu"/><path class="vhc7t7bkn"/></g>`,
		"fallback": "streamline-color:lost-and-found-flat",
	});
}

export default Component;
