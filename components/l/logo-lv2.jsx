import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wwyhitiii.css';
import '../../css/h/h4iijgblw.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wwyhitiii"/><path class="h4iijgblw"/></g>`,
		"fallback": "fad:logo-lv2",
	});
}

export default Component;
