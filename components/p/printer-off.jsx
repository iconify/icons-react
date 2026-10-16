import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w8abz9scu.css';
import '../../css/t/tzrqfsbcy.css';
import '../../css/y/yddwo_buh.css';
import '../../css/a/ahklu1bar.css';
import '../../css/q/qylfpj-0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w8abz9scu"/><path class="tzrqfsbcy"/><path class="yddwo_buh"/><path class="ahklu1bar"/><path class="qylfpj-0m"/></g>`,
		"fallback": "andrsrxn:printer-off",
	});
}

export default Component;
