import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cbzbkebcg.css';
import '../../css/d/dwikpwbti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cbzbkebcg"/><rect class="dwikpwbti"/></g>`,
		"fallback": "lucide:microchip",
	});
}

export default Component;
