import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/i/icgtmkcqv.css';
import '../../css/v/vgp1y8-te.css';
import '../../css/m/m0060_lza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="icgtmkcqv"/><path class="vgp1y8-te"/><path class="m0060_lza"/></g>`,
		"fallback": "matita:italic",
	});
}

export default Component;
