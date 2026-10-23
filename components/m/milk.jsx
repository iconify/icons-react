import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eg6f4tbmd.css';
import '../../css/v/vcecsni6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="eg6f4tbmd"/><path class="vcecsni6h"/></g>`,
		"fallback": "vadivam:milk",
	});
}

export default Component;
