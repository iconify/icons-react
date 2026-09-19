import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/h/hc8pcsbjm.css';
import '../../css/c/cmtd2kblp.css';
import '../../css/k/k9pcsy82o.css';
import '../../css/v/vdtfczwsp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="hc8pcsbjm"/><path class="cmtd2kblp"/><path clip-rule="evenodd" class="k9pcsy82o"/><path class="vdtfczwsp"/></g>`,
		"fallback": "icon-park:monitor-camera",
	});
}

export default Component;
