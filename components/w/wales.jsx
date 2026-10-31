import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f95lbpbyd.css';
import '../../css/j/j1s59ubix.css';
import '../../css/u/uaaq6cc1k.css';
import '../../css/t/t4khc78ar.css';
import '../../css/z/zcj_ibuzw.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f95lbpbyd"/><path class="j1s59ubix"/><path class="uaaq6cc1k"/><path class="t4khc78ar"/><path class="zcj_ibuzw"/>`,
		"fallback": "tabler-flags:wales",
	});
}

export default Component;
