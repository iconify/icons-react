import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ru8qcobdb.css';
import '../../css/i/igrd9_y7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ru8qcobdb"/><path clip-rule="evenodd" class="igrd9_y7n"/>`,
		"fallback": "solar:pills-outline",
	});
}

export default Component;
