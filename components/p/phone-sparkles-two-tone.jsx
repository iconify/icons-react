import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mkuuv1z6l.css';
import '../../css/l/lxr-c948j.css';
import '../../css/n/nh0aceb6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mkuuv1z6l"/><path class="lxr-c948j"/><path class="nh0aceb6k"/></g>`,
		"fallback": "keyline-icons:phone-sparkles-two-tone",
	});
}

export default Component;
