import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k2me688ii.css';
import '../../css/g/gdjy7ibip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k2me688ii"/><path class="gdjy7ibip"/></g>`,
		"fallback": "hugeicons:user-round-x",
	});
}

export default Component;
