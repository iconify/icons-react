import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nrwmd3bcf.css';
import '../../css/d/d6o107kab.css';
import '../../css/j/jtqza1bht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nrwmd3bcf"/><path class="d6o107kab"/><path class="jtqza1bht"/></g>`,
		"fallback": "andrsrxn:scan-user",
	});
}

export default Component;
