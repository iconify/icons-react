import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gftayachw.css';
import '../../css/y/y-xf-db3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="gftayachw"/><path class="y-xf-db3k"/></g>`,
		"fallback": "streamline-freehand:shopping-bag-barcode",
	});
}

export default Component;
