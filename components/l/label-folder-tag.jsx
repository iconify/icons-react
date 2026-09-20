import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/l/lfet3fb5e.css';
import '../../css/v/v-uxf82ng.css';
import '../../css/d/djnc3qbep.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="lfet3fb5e"/><path class="v-uxf82ng"/><path class="djnc3qbep"/></g>`,
		"fallback": "streamline-flex:label-folder-tag",
	});
}

export default Component;
