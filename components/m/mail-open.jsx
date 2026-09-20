import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hwluicbct.css';
import '../../css/p/pyfv0ab6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hwluicbct"/><path class="pyfv0ab6o"/></g>`,
		"fallback": "lucide:mail-open",
	});
}

export default Component;
