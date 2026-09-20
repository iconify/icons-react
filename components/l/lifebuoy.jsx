import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rbdfpgorl.css';
import '../../css/q/q0ae9zbik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rbdfpgorl"/><circle class="q0ae9zbik"/></g>`,
		"fallback": "majesticons:lifebuoy",
	});
}

export default Component;
