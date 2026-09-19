import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/m_vbslior.css';
import '../../css/v/vt0bpzb7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="m_vbslior"/><path class="vt0bpzb7x"/></g>`,
		"fallback": "hugeicons:shopping-basket-secure-03",
	});
}

export default Component;
