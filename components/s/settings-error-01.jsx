import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/m8am-9box.css';
import '../../css/h/hav_9b5ms.css';
import '../../css/m/mrlb7pzin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="m8am-9box"/><path class="hav_9b5ms"/><path class="mrlb7pzin"/></g>`,
		"fallback": "hugeicons:settings-error-01",
	});
}

export default Component;
