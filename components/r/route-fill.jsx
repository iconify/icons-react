import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p04d4_v1f.css';
import '../../css/t/tfqar0b9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p04d4_v1f"/><path class="tfqar0b9x"/></g>`,
		"fallback": "keyline-icons:route-fill",
	});
}

export default Component;
