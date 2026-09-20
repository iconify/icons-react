import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vfof6mijv.css';
import '../../css/i/iluh_0bjw.css';
import '../../css/k/kqa94_bcj.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="d2kvgvbvc"><path class="vfof6mijv"/><path class="iluh_0bjw"/><path class="kqa94_bcj"/></g><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:sword-shield-off",
	});
}

export default Component;
