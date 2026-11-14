import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kzyp-5brs.css';
import '../../css/f/frphcdcxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kzyp-5brs"/><path class="frphcdcxj"/></g>`,
		"fallback": "hugeicons:message-user-02",
	});
}

export default Component;
