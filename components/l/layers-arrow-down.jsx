import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/ctihzfbwb.css';
import '../../css/t/tnjq61bts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ctihzfbwb"/><path class="tnjq61bts"/></g>`,
		"fallback": "vadivam:layers-arrow-down",
	});
}

export default Component;
