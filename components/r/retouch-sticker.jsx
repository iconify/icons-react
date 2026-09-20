import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kw7sfnbji.css';
import '../../css/o/oh6u-cg8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="kw7sfnbji"/><path class="oh6u-cg8s"/></g>`,
		"fallback": "streamline-freehand:retouch-sticker",
	});
}

export default Component;
