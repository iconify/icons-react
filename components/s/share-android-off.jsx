import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cy4sqnj9t.css';
import '../../css/w/wms1q8geo.css';
import '../../css/o/ofhvs956t.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cy4sqnj9t"/><path clip-rule="evenodd" class="wms1q8geo"/><path class="ofhvs956t"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:share-android-off",
	});
}

export default Component;
