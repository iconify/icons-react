import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h-kr0pdci.css';
import '../../css/t/t-b9kyb5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h-kr0pdci"/><path class="t-b9kyb5i"/></g>`,
		"fallback": "lucide:mop",
	});
}

export default Component;
