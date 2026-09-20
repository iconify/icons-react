import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t21kzacmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t21kzacmn"/>`,
		"fallback": "mingcute:qrcode-line",
	});
}

export default Component;
