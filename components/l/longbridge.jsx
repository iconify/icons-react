import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/az6y7_ogd.css';
import '../../css/d/dlrj73gin.css';
import '../../css/n/nfvuruhhu.css';
import '../../css/m/mkng3jhbk.css';
import '../../css/h/h532m2ves.css';

const viewBox = {"width":69,"height":69};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="az6y7_ogd"/><path class="dlrj73gin"/><path class="nfvuruhhu"/><path class="mkng3jhbk"/><path class="h532m2ves"/></g>`,
		"fallback": "thesvg-color:longbridge",
	});
}

export default Component;
