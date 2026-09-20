import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zanokn1nc.css';
import '../../css/s/s2ezpetjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="zanokn1nc"/><path class="s2ezpetjj"/></g>`,
		"fallback": "streamline-freehand:ui-browser-slider",
	});
}

export default Component;
