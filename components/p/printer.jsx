import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nu9qhkbjj.css';
import '../../css/b/b1x25lb6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nu9qhkbjj"/><path class="b1x25lb6s"/></g>`,
		"fallback": "mynaui:printer",
	});
}

export default Component;
