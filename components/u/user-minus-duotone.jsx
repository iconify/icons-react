import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cf7arub8r.css';
import '../../css/r/r9u7cmbas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cf7arub8r"/><path class="r9u7cmbas"/></g>`,
		"fallback": "keyline-icons:user-minus-duotone",
	});
}

export default Component;
