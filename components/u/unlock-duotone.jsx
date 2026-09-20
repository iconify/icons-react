import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/irlw9pb5t.css';
import '../../css/q/qj8iipbgi.css';
import '../../css/g/gluuty0cs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="irlw9pb5t"/><path class="qj8iipbgi"/><path clip-rule="evenodd" class="gluuty0cs"/></g>`,
		"fallback": "keyline-icons:unlock-duotone",
	});
}

export default Component;
