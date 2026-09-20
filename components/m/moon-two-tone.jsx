import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lbk45fb1a.css';
import '../../css/w/wy4wumbry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lbk45fb1a"/><path class="wy4wumbry"/></g>`,
		"fallback": "keyline-icons:moon-two-tone",
	});
}

export default Component;
