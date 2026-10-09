import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzyoq6bkv.css';
import '../../css/m/mhm-ij5vt.css';
import '../../css/x/xipv2cbae.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzyoq6bkv"/><path class="mhm-ij5vt"/><path class="xipv2cbae"/>`,
		"fallback": "energy-icons:lamp-48",
	});
}

export default Component;
