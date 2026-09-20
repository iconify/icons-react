import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s_okanb6s.css';
import '../../css/c/ceqwiws6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="s_okanb6s"/><path class="ceqwiws6j"/></g>`,
		"fallback": "nrk:media-media-complete",
	});
}

export default Component;
