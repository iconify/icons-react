import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jc3hi7b2b.css';
import '../../css/m/m_h_k-0-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jc3hi7b2b"/><path class="m_h_k-0-k"/></g>`,
		"fallback": "reicon:programming-arrow",
	});
}

export default Component;
