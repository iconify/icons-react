import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/blnc77b6l.css';
import '../../css/d/d879a6bkw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="blnc77b6l"/><path class="d879a6bkw"/></g>`,
		"fallback": "hugeicons:python",
	});
}

export default Component;
