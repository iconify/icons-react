import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qo5tdhb3o.css';
import '../../css/i/iyml-1f6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="videocam-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="qo5tdhb3o"/><path class="iyml-1f6i"/></g></g>`,
		"fallback": "cuida:videocam-outline",
	});
}

export default Component;
