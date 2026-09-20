import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pzstf46va.css';
import '../../css/s/sl72glb0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pzstf46va"/><path class="sl72glb0u"/></g>`,
		"fallback": "lucide:solar-panel",
	});
}

export default Component;
