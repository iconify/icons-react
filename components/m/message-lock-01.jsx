import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/s8nr--bvd.css';
import '../../css/e/eotu02jor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="s8nr--bvd"/><path class="eotu02jor"/></g>`,
		"fallback": "hugeicons:message-lock-01",
	});
}

export default Component;
