import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/n9a_lybsm.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/n/nv_660ntr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="n9a_lybsm"/><circle class="shu3xdl9q"/><path class="nv_660ntr"/></g>`,
		"fallback": "solar:user-circle-line-duotone",
	});
}

export default Component;
