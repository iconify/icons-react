import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eozf1-bjg.css';
import '../../css/v/v4-7nlbro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="eozf1-bjg"/><path class="v4-7nlbro"/></g>`,
		"fallback": "coolicons:package-upload-duocolor-round",
	});
}

export default Component;
