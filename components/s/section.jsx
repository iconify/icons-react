import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sh-uryqie.css';
import '../../css/z/zba8xj3cl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sh-uryqie"/><path class="zba8xj3cl"/></g>`,
		"fallback": "vadivam:section",
	});
}

export default Component;
