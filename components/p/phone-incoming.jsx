import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hlgp1hrlb.css';
import '../../css/p/p3x-cgizp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hlgp1hrlb"/><path class="p3x-cgizp"/></g>`,
		"fallback": "andrsrxn:phone-incoming",
	});
}

export default Component;
