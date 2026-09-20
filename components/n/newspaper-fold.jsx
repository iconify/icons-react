import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/r_7fsm3ms.css';
import '../../css/v/ve9s00b9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="r_7fsm3ms"/><path class="ve9s00b9i"/></g>`,
		"fallback": "streamline-ultimate:newspaper-fold",
	});
}

export default Component;
