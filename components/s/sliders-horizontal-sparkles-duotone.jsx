import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fz23qj35d.css';
import '../../css/l/lxr-c948j.css';
import '../../css/h/ho34uhwef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fz23qj35d"/><path class="lxr-c948j"/><path class="ho34uhwef"/></g>`,
		"fallback": "keyline-icons:sliders-horizontal-sparkles-duotone",
	});
}

export default Component;
