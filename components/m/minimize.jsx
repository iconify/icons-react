import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/c/cddtx52ge.css';
import '../../css/n/nab1kbbwm.css';
import '../../css/h/hnxj6fbkd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="cddtx52ge"/><path class="nab1kbbwm"/><path class="hnxj6fbkd"/></g>`,
		"fallback": "matita:minimize",
	});
}

export default Component;
