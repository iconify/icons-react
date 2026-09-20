import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/ms3vmxfar.css';
import '../../css/e/eos5g58ba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ms3vmxfar"/><path class="eos5g58ba"/></g>`,
		"fallback": "streamline-sharp-color:mail-loading-flat",
	});
}

export default Component;
