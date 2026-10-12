import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ixnuo5b5d.css';
import '../../css/w/wyl_mjnfi.css';
import '../../css/f/fgku1kmnz.css';
import '../../css/k/kkwiaglaa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ixnuo5b5d"/><path class="wyl_mjnfi"/><circle class="fgku1kmnz"/><path class="kkwiaglaa"/></g>`,
		"fallback": "andrsrxn:lighthouse",
	});
}

export default Component;
