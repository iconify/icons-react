import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qx4zoabor.css';
import '../../css/p/pm4bswxgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qx4zoabor"/><path class="pm4bswxgt"/>`,
		"fallback": "solar:transfer-vertical-bold-duotone",
	});
}

export default Component;
