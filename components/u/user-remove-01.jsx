import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/okg0y9bwh.css';
import '../../css/k/kl435db5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="okg0y9bwh"/><circle class="kl435db5g"/></g>`,
		"fallback": "hugeicons:user-remove-01",
	});
}

export default Component;
