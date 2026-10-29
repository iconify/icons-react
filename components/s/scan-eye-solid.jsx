import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xq9ro6rtu.css';
import '../../css/b/bw1vllbry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="xq9ro6rtu"/><path class="bw1vllbry wm-a"/></g>`,
		"fallback": "withicons:scan-eye-solid",
	});
}

export default Component;
