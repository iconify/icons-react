import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cxw1hmxur.css';
import '../../css/v/vn__56bok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="cxw1hmxur"/><path class="vn__56bok wm-a"/></g>`,
		"fallback": "withicons:podcast-solid",
	});
}

export default Component;
