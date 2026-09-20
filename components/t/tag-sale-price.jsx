import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zufw0slva.css';
import '../../css/q/q3cnxbcbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="zufw0slva"/><path class="q3cnxbcbj"/></g>`,
		"fallback": "streamline-freehand:tag-sale-price",
	});
}

export default Component;
