import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/p6e59ac-l.css';
import '../../css/s/shnlydb1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><circle class="p6e59ac-l"/><circle class="shnlydb1l"/></g>`,
		"fallback": "grommet-icons:mastercard",
	});
}

export default Component;
