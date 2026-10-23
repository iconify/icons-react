import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l630vtbjn.css';
import '../../css/f/fqmcxbbhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="l630vtbjn"/><path class="fqmcxbbhf"/></g>`,
		"fallback": "vadivam:sticky-notes",
	});
}

export default Component;
