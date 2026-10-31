import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bp4jx4kwz.css';
import '../../css/d/damovmc1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bp4jx4kwz"/><path class="damovmc1h"/></g>`,
		"fallback": "coolicons:phone-missed-duocolor-round",
	});
}

export default Component;
