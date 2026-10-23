import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q8738sbup.css';
import '../../css/b/bhh2imbdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q8738sbup"/><path class="bhh2imbdd"/></g>`,
		"fallback": "vadivam:repeat-1",
	});
}

export default Component;
