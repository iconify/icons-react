import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a7wqiw03r.css';
import '../../css/y/yooflcckh.css';
import '../../css/s/sn_scbc2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="a7wqiw03r"/><path class="yooflcckh"/><path class="sn_scbc2n"/></g>`,
		"fallback": "si:stop-circle-duotone",
	});
}

export default Component;
