import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qsy9cyblc.css';
import '../../css/u/uh-9-99fe.css';
import '../../css/i/iujjribmd.css';
import '../../css/w/wzga5cc5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qsy9cyblc"/><path class="uh-9-99fe"/><circle class="iujjribmd"/><circle class="wzga5cc5k"/></g>`,
		"fallback": "lucide:luggage",
	});
}

export default Component;
