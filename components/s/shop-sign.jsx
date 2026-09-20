import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v7z11zbvf.css';
import '../../css/y/y9cdqtbig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="v7z11zbvf"/><path class="y9cdqtbig"/></g>`,
		"fallback": "streamline-freehand:shop-sign",
	});
}

export default Component;
