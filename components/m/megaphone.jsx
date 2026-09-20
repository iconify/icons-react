import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t8hqqactl.css';
import '../../css/f/fp_66358b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t8hqqactl"/><path class="fp_66358b"/></g>`,
		"fallback": "lucide:megaphone",
	});
}

export default Component;
