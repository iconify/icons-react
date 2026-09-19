import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vepjdob9n.css';
import '../../css/w/wc49swbmj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vepjdob9n"/><circle class="wc49swbmj"/></g>`,
		"fallback": "bytesize:photo",
	});
}

export default Component;
