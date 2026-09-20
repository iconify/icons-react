import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/a3bpnfpzq.css';
import '../../css/o/o774hwuad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="a3bpnfpzq"/><path class="o774hwuad"/></g>`,
		"fallback": "streamline-freehand:kindle-read-document-hold",
	});
}

export default Component;
