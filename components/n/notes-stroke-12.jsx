import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/z/ztnkpqbtl.css';
import '../../css/n/ncxqyt88o.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="ztnkpqbtl"/><path class="ncxqyt88o"/></g>`,
		"fallback": "garden:notes-stroke-12",
	});
}

export default Component;
