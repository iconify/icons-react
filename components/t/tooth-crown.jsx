import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mo7601bhz.css';
import '../../css/q/qir2uyb5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="mo7601bhz wm-k"/><path class="qir2uyb5g wm-a"/></g>`,
		"fallback": "withicons-bauhaus:tooth-crown",
	});
}

export default Component;
