import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kpp-f2cxo.css';
import '../../css/s/stdqiukcl.css';
import '../../css/k/kzm10h_6z.css';
import '../../css/q/qilrv-bce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kpp-f2cxo"/><path clip-rule="evenodd" class="stdqiukcl"/><path class="kzm10h_6z"/><path class="qilrv-bce"/></g>`,
		"fallback": "solar:notification-unread-lines-outline",
	});
}

export default Component;
