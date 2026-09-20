import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmizg-b1r.css';
import '../../css/m/mf2faab1e.css';
import '../../css/m/m1bd3mb0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmizg-b1r"/><path class="mf2faab1e"/><path class="m1bd3mb0c"/>`,
		"fallback": "mingcute:surprise-line",
	});
}

export default Component;
