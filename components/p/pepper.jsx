import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m2129rw9x.css';
import '../../css/q/qf2qi3fpd.css';
import '../../css/w/wp3ssvtvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m2129rw9x"/><path class="qf2qi3fpd"/><path class="wp3ssvtvs"/></g>`,
		"fallback": "andrsrxn:pepper",
	});
}

export default Component;
