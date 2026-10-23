import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uhfwh4bpb.css';
import '../../css/l/l5dry7bxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="uhfwh4bpb"/><path class="l5dry7bxk"/></g>`,
		"fallback": "vadivam:radio-receiver",
	});
}

export default Component;
