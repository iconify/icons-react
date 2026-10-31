import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/ryy7bo74d.css';
import '../../css/g/glg82pb0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ryy7bo74d"/><path class="glg82pb0v"/></g>`,
		"fallback": "coolicons:siren-duocolor-round",
	});
}

export default Component;
