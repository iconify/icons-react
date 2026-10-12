import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wfsehibdi.css';
import '../../css/a/a2kyymbaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wfsehibdi"/><path class="a2kyymbaj"/></g>`,
		"fallback": "lucide-extended:toolbox-duotone",
	});
}

export default Component;
