import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/mi2wm9b-w.css';
import '../../css/q/q-retccrz.css';
import '../../css/c/cym3znlvx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="mi2wm9b-w"/><path class="q-retccrz"/><path class="cym3znlvx"/></g>`,
		"fallback": "icon-park:link-cloud-faild",
	});
}

export default Component;
