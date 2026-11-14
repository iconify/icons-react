import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c81h09bpc.css';
import '../../css/y/y91axac9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="c81h09bpc"/><path class="y91axac9q"/></g>`,
		"fallback": "hugeicons:message-incoming-01",
	});
}

export default Component;
