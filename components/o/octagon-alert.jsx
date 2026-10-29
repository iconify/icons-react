import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/x/xkpkzmbva.css';
import '../../css/g/gu930pb7q.css';
import '../../css/k/k2fmkxbgw.css';
import '../../css/g/ga83e6b3i.css';
import '../../css/x/xmqcpbcif.css';
import '../../css/o/odb4jcbcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wm-shadow xkpkzmbva"/><path class="gu930pb7q"/><path class="k2fmkxbgw"/><path class="ga83e6b3i"/><path class="wm-shine xmqcpbcif"/><path class="odb4jcbcd wm-deco"/></g>`,
		"fallback": "withicons-sticker:octagon-alert",
	});
}

export default Component;
