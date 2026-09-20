import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v5rahzbrc.css';
import '../../css/a/adei87vxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v5rahzbrc"/><path class="adei87vxs"/></g>`,
		"fallback": "solar:revote-line-duotone",
	});
}

export default Component;
