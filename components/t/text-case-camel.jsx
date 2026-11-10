import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v9fyfmihe.css';
import '../../css/n/ncnm-sb9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v9fyfmihe"/><path class="ncnm-sb9h"/></g>`,
		"fallback": "andrsrxn:text-case-camel",
	});
}

export default Component;
