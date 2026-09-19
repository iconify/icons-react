import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/u/uhmna2bmj.css';
import '../../css/w/wesntbb0s.css';
import '../../css/x/x9mfbm6ku.css';
import '../../css/b/b9profbtv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="uhmna2bmj"/><path class="wesntbb0s"/><path class="x9mfbm6ku"/><path class="b9profbtv"/></g>`,
		"fallback": "icon-park:multi-triangular",
	});
}

export default Component;
