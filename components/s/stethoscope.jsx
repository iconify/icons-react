import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ecqxmbb9q.css';
import '../../css/j/jgongpb2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ecqxmbb9q"/><path class="jgongpb2z"/></g>`,
		"fallback": "vadivam:stethoscope",
	});
}

export default Component;
