import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v6bf2jfhb.css';
import '../../css/x/xor_oek6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v6bf2jfhb"/><path class="xor_oek6n"/></g>`,
		"fallback": "hugeicons:message-outgoing-02",
	});
}

export default Component;
