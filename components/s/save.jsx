import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/r/riyxgzgms.css';
import '../../css/c/ct5xi-ksm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="riyxgzgms"/><path class="ct5xi-ksm"/></g>`,
		"fallback": "matita:save",
	});
}

export default Component;
