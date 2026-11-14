import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gvqvq1b1k.css';
import '../../css/y/ysq2eccai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gvqvq1b1k"/><path class="ysq2eccai"/></g>`,
		"fallback": "hugeicons:message-lock-02",
	});
}

export default Component;
