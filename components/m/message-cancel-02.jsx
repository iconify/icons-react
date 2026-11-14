import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/eoq5e_b6o.css';
import '../../css/e/eu8jy0u3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="eoq5e_b6o"/><path class="eu8jy0u3i"/></g>`,
		"fallback": "hugeicons:message-cancel-02",
	});
}

export default Component;
