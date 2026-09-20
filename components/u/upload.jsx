import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zy8533erf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zy8533erf"/>`,
		"fallback": "uiw:upload",
	});
}

export default Component;
