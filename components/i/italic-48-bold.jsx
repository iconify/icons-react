import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r29txbtvf.css';
import '../../css/w/wif1j2bxi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r29txbtvf"/><path class="wif1j2bxi"/>`,
		"fallback": "energy-icons:italic-48-bold",
	});
}

export default Component;
