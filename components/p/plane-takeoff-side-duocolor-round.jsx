import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/obqscbcxp.css';
import '../../css/d/du9jesv4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="obqscbcxp"/><path class="du9jesv4a"/></g>`,
		"fallback": "coolicons:plane-takeoff-side-duocolor-round",
	});
}

export default Component;
