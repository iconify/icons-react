import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/m6zg-8bxv.css';
import '../../css/i/ivklvrbbi.css';
import '../../css/m/my67gw8xu.css';
import '../../css/u/uepozi-kl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="m6zg-8bxv wm-k"/><path class="ivklvrbbi wm-s"/><path class="my67gw8xu"/><path class="uepozi-kl"/></g>`,
		"fallback": "withicons-bauhaus:paint-bucket",
	});
}

export default Component;
