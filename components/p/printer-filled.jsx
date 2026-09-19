import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8owdqtsa.css';
import '../../css/w/wrt-x_0am.css';
import '../../css/d/dt3g_4q-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d8owdqtsa"/><circle class="wrt-x_0am"/><path class="dt3g_4q-e"/>`,
		"fallback": "bitcoin-icons:printer-filled",
	});
}

export default Component;
