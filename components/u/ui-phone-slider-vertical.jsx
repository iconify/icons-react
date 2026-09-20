import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m5wapdbon.css';
import '../../css/v/ve0_5fbzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="m5wapdbon"/><path class="ve0_5fbzq"/></g>`,
		"fallback": "streamline-freehand:ui-phone-slider-vertical",
	});
}

export default Component;
