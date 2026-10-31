import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ann0lpb9l.css';
import '../../css/l/ldhmjcjud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ann0lpb9l"/><path class="ldhmjcjud"/></g>`,
		"fallback": "coolicons:spell-check-duocolor-round",
	});
}

export default Component;
