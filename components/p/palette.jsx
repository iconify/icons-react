import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gofdhxbxe.css';
import '../../css/q/qow865btz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gofdhxbxe"/><path class="qow865btz"/></g>`,
		"fallback": "vadivam:palette",
	});
}

export default Component;
