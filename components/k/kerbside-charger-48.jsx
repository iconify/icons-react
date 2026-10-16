import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_jk-9bgq.css';
import '../../css/m/mr762oh0x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_jk-9bgq"/><path class="mr762oh0x"/>`,
		"fallback": "energy-icons:kerbside-charger-48",
	});
}

export default Component;
