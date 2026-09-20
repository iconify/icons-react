import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xmgydcc1j.css';
import '../../css/a/adei87vxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xmgydcc1j"/><path class="adei87vxs"/></g>`,
		"fallback": "solar:revote-linear",
	});
}

export default Component;
