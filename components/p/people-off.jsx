import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vvcip01ow.css';
import '../../css/r/rwo88xq5a.css';
import '../../css/l/l6ukflrbe.css';
import '../../css/o/okx1y-7kr.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vvcip01ow"/><path clip-rule="evenodd" class="rwo88xq5a"/><path clip-rule="evenodd" class="l6ukflrbe"/><path clip-rule="evenodd" class="okx1y-7kr"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:people-off",
	});
}

export default Component;
