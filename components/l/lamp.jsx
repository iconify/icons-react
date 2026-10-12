import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u0nx85bpv.css';
import '../../css/a/anuyszbgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u0nx85bpv"/><path class="anuyszbgp"/></g>`,
		"fallback": "andrsrxn:lamp",
	});
}

export default Component;
