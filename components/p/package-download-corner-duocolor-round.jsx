import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p7cyu9biu.css';
import '../../css/z/ze3pu0b9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p7cyu9biu"/><path class="ze3pu0b9j"/></g>`,
		"fallback": "coolicons:package-download-corner-duocolor-round",
	});
}

export default Component;
