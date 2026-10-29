import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/asz7s6bbd.css';
import '../../css/z/zs1-uybsu.css';
import '../../css/b/b-l7f6bzq.css';
import '../../css/q/qonvei8yq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="asz7s6bbd wm-k"/><path class="wm-a zs1-uybsu"/><path class="b-l7f6bzq"/><path class="qonvei8yq"/></g>`,
		"fallback": "withicons-bauhaus:puja-thali",
	});
}

export default Component;
