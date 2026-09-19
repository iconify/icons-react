import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/z/zitt59a-n.css';
import '../../css/t/txwxi5byh.css';
import '../../css/t/t3suj7_gg.css';
import '../../css/l/l1u_1pbtl.css';
import '../../css/f/felotf44k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="zitt59a-n"/><path class="txwxi5byh"/><path class="t3suj7_gg"/><path class="l1u_1pbtl"/><path class="felotf44k"/></g>`,
		"fallback": "icon-park-outline:termination-file",
	});
}

export default Component;
