import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogiazdbpv.css';
import '../../css/h/hkm130bnc.css';
import '../../css/x/xenj0gbru.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogiazdbpv"/><path class="hkm130bnc"/><path class="xenj0gbru"/>`,
		"fallback": "energy-icons:stadium-48",
	});
}

export default Component;
