import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mfr_vgb3m.css';
import '../../css/v/v14vvxr5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mfr_vgb3m"/><path class="v14vvxr5g"/></g>`,
		"fallback": "lucide:rotate-ccw-square",
	});
}

export default Component;
