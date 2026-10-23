import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ai_1mc02t.css';
import '../../css/x/xdztghbni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ai_1mc02t"/><path class="xdztghbni"/></g>`,
		"fallback": "vadivam:truck",
	});
}

export default Component;
