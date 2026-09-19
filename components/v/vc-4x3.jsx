import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/ww6ttdayx.css';
import '../../css/h/hw5lht71s.css';
import '../../css/l/l-bihbc4h.css';
import '../../css/v/vs8j3jbaf.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ww6ttdayx"/><path class="hw5lht71s"/><path class="l-bihbc4h"/><path class="vs8j3jbaf"/></g>`,
		"fallback": "flag:vc-4x3",
	});
}

export default Component;
