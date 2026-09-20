import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wo9mpubcg.css';
import '../../css/g/gvm8464rs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wo9mpubcg"/><path class="gvm8464rs"/></g>`,
		"fallback": "keyline-icons:rocket-2-fill",
	});
}

export default Component;
