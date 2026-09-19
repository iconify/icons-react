import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cs3pbjb4h.css';
import '../../css/a/acjmtmbef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="cs3pbjb4h"/><path class="acjmtmbef"/></g>`,
		"fallback": "hugeicons:user-time-01",
	});
}

export default Component;
