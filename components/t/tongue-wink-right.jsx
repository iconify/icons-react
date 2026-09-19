import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/ygh7ci8ga.css';
import '../../css/a/ayc2nrb8u.css';
import '../../css/a/ab8vmjhok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ygh7ci8ga"/><path class="ayc2nrb8u"/><path class="ab8vmjhok"/></g>`,
		"fallback": "hugeicons:tongue-wink-right",
	});
}

export default Component;
