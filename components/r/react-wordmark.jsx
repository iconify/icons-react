import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgxn76bkp.css';
import '../../css/e/e22nqiizq.css';
import '../../css/h/hkb-iz_va.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wgxn76bkp"><circle class="e22nqiizq"/><path class="hkb-iz_va"/></g>`,
		"fallback": "devicon:react-wordmark",
	});
}

export default Component;
