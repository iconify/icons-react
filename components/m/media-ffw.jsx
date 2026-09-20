import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vxwfki6rh.css';
import '../../css/y/yfmnh4brc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vxwfki6rh"/><path class="yfmnh4brc"/></g>`,
		"fallback": "nrk:media-ffw",
	});
}

export default Component;
