import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dx4lj_blu.css';
import '../../css/r/rvvxedcli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dx4lj_blu"/><path class="rvvxedcli"/></g>`,
		"fallback": "vadivam:lock-keyhole-open",
	});
}

export default Component;
