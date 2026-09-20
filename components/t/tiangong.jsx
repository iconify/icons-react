import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qkeomkbnh.css';
import '../../css/e/epnvafbwy.css';
import '../../css/a/aqhljpb_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="qkeomkbnh"/><path class="epnvafbwy"/><path class="aqhljpb_o"/></g>`,
		"fallback": "thesvg:tiangong",
	});
}

export default Component;
