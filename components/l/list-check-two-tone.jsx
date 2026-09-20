import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/ryvt14b8p.css';
import '../../css/x/xi2kx1b1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ryvt14b8p"/><path class="xi2kx1b1h"/></g>`,
		"fallback": "keyline-icons:list-check-two-tone",
	});
}

export default Component;
