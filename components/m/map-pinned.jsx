import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t58456njl.css';
import '../../css/c/c76xcz8jk.css';
import '../../css/p/ptvu1u_4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t58456njl"/><path class="c76xcz8jk"/><circle class="ptvu1u_4n"/></g>`,
		"fallback": "lucide:map-pinned",
	});
}

export default Component;
