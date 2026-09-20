import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jpfl0_i4c.css';
import '../../css/l/lcfnqzkei.css';
import '../../css/m/meaiqe0ox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jpfl0_i4c"/><circle class="lcfnqzkei"/><path class="meaiqe0ox"/></g>`,
		"fallback": "majesticons:scan-user-line",
	});
}

export default Component;
