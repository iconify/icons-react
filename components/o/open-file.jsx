import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hb6uocgia.css';
import '../../css/d/dvfmwi3vd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="hb6uocgia"/><path class="dvfmwi3vd"/></g>`,
		"fallback": "ix:open-file",
	});
}

export default Component;
