import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/td9l-etip.css';
import '../../css/x/xatcsgbad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="td9l-etip"/><path class="xatcsgbad"/>`,
		"fallback": "mage:phone-call-fill",
	});
}

export default Component;
