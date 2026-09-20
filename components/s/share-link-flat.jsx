import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g1f9u1bgz.css';
import '../../css/u/ue4f_wb-t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="g1f9u1bgz"/><path class="ue4f_wb-t"/></g>`,
		"fallback": "streamline-color:share-link-flat",
	});
}

export default Component;
