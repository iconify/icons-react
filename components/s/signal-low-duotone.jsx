import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z9y-hod0k.css';
import '../../css/n/n99-ercef.css';
import '../../css/d/dno4_nblm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="z9y-hod0k"/><path class="n99-ercef"/><path class="dno4_nblm"/></g>`,
		"fallback": "keyline-icons:signal-low-duotone",
	});
}

export default Component;
