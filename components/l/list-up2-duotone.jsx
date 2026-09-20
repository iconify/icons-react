import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jwn7phbmq.css';
import '../../css/m/mlqrn94ek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jwn7phbmq"/><path class="mlqrn94ek"/></g>`,
		"fallback": "reicon:list-up2-duotone",
	});
}

export default Component;
