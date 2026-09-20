import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nkm6sgnzf.css';
import '../../css/i/ip_8_m38a.css';
import '../../css/i/ik8-5tb9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nkm6sgnzf"/><path class="ip_8_m38a"/><circle class="ik8-5tb9v"/></g>`,
		"fallback": "lucide:stethoscope",
	});
}

export default Component;
