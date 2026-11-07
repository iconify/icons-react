import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oz8hddabs.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/h/huw4b6big.css';
import '../../css/m/mt3e7vqmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oz8hddabs"/><g class="xtpeb-edw"><path class="huw4b6big"/><path class="mt3e7vqmm"/></g>`,
		"fallback": "solar:video-library-bold-duotone",
	});
}

export default Component;
