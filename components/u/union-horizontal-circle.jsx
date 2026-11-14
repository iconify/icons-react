import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lb80ue3yq.css';
import '../../css/g/gu4z1qygw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lb80ue3yq"/><path class="gu4z1qygw"/></g>`,
		"fallback": "hugeicons:union-horizontal-circle",
	});
}

export default Component;
