import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/aae1b-hdl.css';
import '../../css/g/g2c--b_cb.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="aae1b-hdl"/><circle class="g2c--b_cb"/></g>`,
		"fallback": "fad:logo-cubase",
	});
}

export default Component;
