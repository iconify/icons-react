import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/payyopbvb.css';
import '../../css/a/a6prftbjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="payyopbvb"/><path class="a6prftbjf"/></g>`,
		"fallback": "hugeicons:message-unlock-02",
	});
}

export default Component;
