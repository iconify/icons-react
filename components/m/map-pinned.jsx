import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t58456njl.css';
import '../../css/p/ptvu1u_4n.css';
import '../../css/s/ssdl_vbpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t58456njl"/><circle class="ptvu1u_4n"/><path class="ssdl_vbpi"/></g>`,
		"fallback": "lucide:map-pinned",
	});
}

export default Component;
