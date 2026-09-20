import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zf7cd0p_c.css';
import '../../css/g/gluuty0cs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zf7cd0p_c"/><path clip-rule="evenodd" class="gluuty0cs"/></g>`,
		"fallback": "keyline-icons:unlock-fill",
	});
}

export default Component;
