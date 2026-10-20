import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eyl-6ub5x.css';
import '../../css/o/o8332hzke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="eyl-6ub5x"/><path class="o8332hzke"/></g>`,
		"fallback": "vadivam:scan-eye",
	});
}

export default Component;
