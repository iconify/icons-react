import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/ze2lqlboq.css';
import '../../css/s/sfr0hersd.css';
import '../../css/d/dnc2ux3uw.css';
import '../../css/l/l5grvjbzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ze2lqlboq"/><path class="sfr0hersd"/><path class="dnc2ux3uw"/><path class="l5grvjbzo"/></g>`,
		"fallback": "andrsrxn:leaf-refresh",
	});
}

export default Component;
