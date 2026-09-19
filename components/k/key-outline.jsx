import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/j2n-flbsn.css';
import '../../css/k/kp-38cbhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="key-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="j2n-flbsn"/><path class="kp-38cbhy"/></g></g>`,
		"fallback": "cuida:key-outline",
	});
}

export default Component;
