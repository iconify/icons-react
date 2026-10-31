import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mfhvcbesx.css';
import '../../css/l/l151_pbxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mfhvcbesx"/><path class="l151_pbxj"/></g>`,
		"fallback": "coolicons:sheep-duocolor-round",
	});
}

export default Component;
