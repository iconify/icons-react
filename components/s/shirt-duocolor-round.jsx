import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t4sagtegh.css';
import '../../css/m/mtc0v6vtg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t4sagtegh"/><path class="mtc0v6vtg"/></g>`,
		"fallback": "coolicons:shirt-duocolor-round",
	});
}

export default Component;
