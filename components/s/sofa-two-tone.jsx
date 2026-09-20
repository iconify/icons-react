import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vnmd9hble.css';
import '../../css/r/rk3-csywm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vnmd9hble"/><path class="rk3-csywm"/></g>`,
		"fallback": "keyline-icons:sofa-two-tone",
	});
}

export default Component;
