import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m7mwb9dzj.css';
import '../../css/o/oy0reab8f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="m7mwb9dzj"/><path class="oy0reab8f"/></g>`,
		"fallback": "streamline-flex-color:scanner-flat",
	});
}

export default Component;
