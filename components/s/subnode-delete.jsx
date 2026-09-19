import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bu8_8lune.css';
import '../../css/y/ygxy_c58d.css';
import '../../css/e/eh32i2zgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="bu8_8lune"/><path class="ygxy_c58d"/><path class="eh32i2zgp"/></g>`,
		"fallback": "hugeicons:subnode-delete",
	});
}

export default Component;
