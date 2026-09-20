import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qi9nu3s_d.css';
import '../../css/r/rmrb0ibeg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qi9nu3s_d"/><path class="rmrb0ibeg"/></g>`,
		"fallback": "lucide:trending-up-down",
	});
}

export default Component;
