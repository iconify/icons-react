import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/t/t6r4uxbtf.css';
import '../../css/l/ln2abc9qm.css';
import '../../css/h/hrp1nacdz.css';
import '../../css/q/qdl2kvbja.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="t6r4uxbtf"/><path class="ln2abc9qm"/><path class="hrp1nacdz"/><path class="qdl2kvbja"/></g>`,
		"fallback": "icon-park-solid:peach",
	});
}

export default Component;
