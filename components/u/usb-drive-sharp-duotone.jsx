import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xt8_88b0a.css';
import '../../css/w/wusl4fbeo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xt8_88b0a"/><path clip-rule="evenodd" class="wusl4fbeo"/></g>`,
		"fallback": "keyline-icons:usb-drive-sharp-duotone",
	});
}

export default Component;
