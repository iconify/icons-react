import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bt1wfcb7a.css';
import '../../css/j/jdfa1bchc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bt1wfcb7a"/><path class="jdfa1bchc"/></g>`,
		"fallback": "lucide:rotate-cw-clock",
	});
}

export default Component;
