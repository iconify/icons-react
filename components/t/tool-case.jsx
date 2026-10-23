import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rimlknycr.css';
import '../../css/i/i4axw7bzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rimlknycr"/><path class="i4axw7bzt"/></g>`,
		"fallback": "vadivam:tool-case",
	});
}

export default Component;
