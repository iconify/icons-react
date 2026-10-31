import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ok8l_-wct.css';
import '../../css/z/ze3pu0b9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ok8l_-wct"/><path class="ze3pu0b9j"/></g>`,
		"fallback": "coolicons:package-check-corner-duocolor-round",
	});
}

export default Component;
