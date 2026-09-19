import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vvodlpb0u.css';
import '../../css/x/xotln27_c.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="vvodlpb0u"/><path class="xotln27_c"/></g>`,
		"fallback": "fad:logo-tracktion",
	});
}

export default Component;
