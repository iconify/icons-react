import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mf5e4hehb.css';
import '../../css/r/r8-cjywgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mf5e4hehb"/><rect class="r8-cjywgb"/></g>`,
		"fallback": "lucide:tv-minimal-play",
	});
}

export default Component;
