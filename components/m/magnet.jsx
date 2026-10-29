import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vk3m-ybld.css';
import '../../css/t/tn-dplbct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="vk3m-ybld"/><path class="tn-dplbct"/></g>`,
		"fallback": "withicons-bauhaus:magnet",
	});
}

export default Component;
