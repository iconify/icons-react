import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gf7bvie0m.css';
import '../../css/h/hyhsxxbud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gf7bvie0m"/><path class="hyhsxxbud"/></g>`,
		"fallback": "coolicons:moon-star-duocolor-round",
	});
}

export default Component;
