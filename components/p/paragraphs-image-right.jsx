import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rubmlob7m.css';
import '../../css/w/wxa-ys2mk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rubmlob7m"/><path class="wxa-ys2mk"/></g>`,
		"fallback": "streamline-freehand:paragraphs-image-right",
	});
}

export default Component;
