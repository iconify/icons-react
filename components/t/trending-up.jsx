import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/v/v9sren2xa.css';
import '../../css/e/evaws0b8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="v9sren2xa"/><path class="evaws0b8h"/></g>`,
		"fallback": "matita:trending-up",
	});
}

export default Component;
