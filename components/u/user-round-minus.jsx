import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rvjxasb5m.css';
import '../../css/i/ij6nqtb9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rvjxasb5m"/><path class="ij6nqtb9k"/></g>`,
		"fallback": "hugeicons:user-round-minus",
	});
}

export default Component;
