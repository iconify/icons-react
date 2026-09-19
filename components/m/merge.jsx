import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/czrrxsmtm.css';
import '../../css/o/o9m_n6zhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="czrrxsmtm"/><path class="o9m_n6zhw"/></g>`,
		"fallback": "hugeicons:merge",
	});
}

export default Component;
