import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aks-r-baq.css';
import '../../css/q/qm97rya6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aks-r-baq"/><path class="qm97rya6y"/>`,
		"fallback": "token:socks",
	});
}

export default Component;
