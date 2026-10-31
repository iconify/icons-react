import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/twahlgidx.css';
import '../../css/t/t7_v8gbpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="twahlgidx"/><path class="t7_v8gbpl"/></g>`,
		"fallback": "coolicons:pin-duocolor-round",
	});
}

export default Component;
