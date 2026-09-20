import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/y-sfj2bgs.css';
import '../../css/n/n5c-clmjb.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="y-sfj2bgs"/><path class="n5c-clmjb"/></g>`,
		"fallback": "lineicons:map-marker-5",
	});
}

export default Component;
