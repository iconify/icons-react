import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/azfpyebwv.css';
import '../../css/h/hqj95ebnt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="azfpyebwv"/><path class="hqj95ebnt"/></g>`,
		"fallback": "streamline-color:sign-cross-square-flat",
	});
}

export default Component;
