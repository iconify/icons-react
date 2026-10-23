import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pazdh38fl.css';
import '../../css/e/eqlxv263a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pazdh38fl"/><path class="eqlxv263a"/></g>`,
		"fallback": "vadivam:shrimp",
	});
}

export default Component;
