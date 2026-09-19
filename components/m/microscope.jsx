import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/e/ezq3zxkis.css';
import '../../css/e/e_xfgzbtb.css';
import '../../css/m/mv7_v6hps.css';
import '../../css/q/q8f8vcygc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="ezq3zxkis"/><path clip-rule="evenodd" class="e_xfgzbtb"/><path class="mv7_v6hps"/><path class="q8f8vcygc"/></g>`,
		"fallback": "icon-park-solid:microscope",
	});
}

export default Component;
