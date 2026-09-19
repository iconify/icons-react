import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/ireet7bnu.css';
import '../../css/a/avtsxhbov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ireet7bnu"/><path class="avtsxhbov"/></g>`,
		"fallback": "hugeicons:trending-up-down",
	});
}

export default Component;
