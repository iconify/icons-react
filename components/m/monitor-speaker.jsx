import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tc102wbsi.css';
import '../../css/n/nkti06nzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tc102wbsi"/><path class="nkti06nzt"/></g>`,
		"fallback": "vadivam:monitor-speaker",
	});
}

export default Component;
