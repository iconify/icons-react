import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k9drbtbgy.css';
import '../../css/w/wzc5z4bla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k9drbtbgy"/><path class="wzc5z4bla"/></g>`,
		"fallback": "hugeicons:message-secure-02",
	});
}

export default Component;
