import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fdzs2tyxu.css';
import '../../css/t/t982gubhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fdzs2tyxu"/><path class="t982gubhv"/></g>`,
		"fallback": "tabler:layout-sidebar-left-collapse",
	});
}

export default Component;
