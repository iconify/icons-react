import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/badzmqlos.css';
import '../../css/m/mx3q7qz2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="badzmqlos"/><path class="mx3q7qz2c"/></g>`,
		"fallback": "tabler:manual-gearbox",
	});
}

export default Component;
