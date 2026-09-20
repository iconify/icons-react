import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9r54cbek.css';
import '../../css/w/wsm_8oqcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9r54cbek"/><path class="wsm_8oqcp"/>`,
		"fallback": "mingcute:showers-fill",
	});
}

export default Component;
