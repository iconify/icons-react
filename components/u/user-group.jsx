import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qu0egmbey.css';
import '../../css/n/n72rw4b2e.css';
import '../../css/u/ubarg2csw.css';
import '../../css/j/jlbm-ccbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qu0egmbey"/><circle class="n72rw4b2e"/><circle class="ubarg2csw"/><circle class="jlbm-ccbc"/></g>`,
		"fallback": "lucide:user-group",
	});
}

export default Component;
