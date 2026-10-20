import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/je3f1fp5o.css';
import '../../css/j/jgongpb2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="je3f1fp5o"/><path class="jgongpb2z"/></g>`,
		"fallback": "vadivam:stethoscope",
	});
}

export default Component;
