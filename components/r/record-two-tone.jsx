import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bcje72bbx.css';
import '../../css/q/qm8irt2ma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bcje72bbx"/><path class="qm8irt2ma"/></g>`,
		"fallback": "keyline-icons:record-two-tone",
	});
}

export default Component;
