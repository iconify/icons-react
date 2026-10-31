import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m-eanacma.css';
import '../../css/e/ezqls9bkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="m-eanacma"/><path class="ezqls9bkr"/></g>`,
		"fallback": "coolicons:plug-duocolor-round",
	});
}

export default Component;
