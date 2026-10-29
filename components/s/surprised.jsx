import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xnc1qkb-s.css';
import '../../css/v/v_quf4r_u.css';
import '../../css/a/a0d2n6bid.css';
import '../../css/n/n0p30nbbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="xnc1qkb-s"/><path class="v_quf4r_u"/><path class="a0d2n6bid"/><path class="n0p30nbbb"/></g>`,
		"fallback": "withicons-bauhaus:surprised",
	});
}

export default Component;
