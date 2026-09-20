import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tdpj5lbkd.css';
import '../../css/u/uxhqpsxby.css';
import '../../css/p/p0ngbyb8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tdpj5lbkd"/><path class="uxhqpsxby"/><path class="p0ngbyb8q"/></g>`,
		"fallback": "tabler:view-360-off",
	});
}

export default Component;
