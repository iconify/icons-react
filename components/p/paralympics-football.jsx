import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qys-84bjk.css';
import '../../css/d/dypeyrb2s.css';
import '../../css/v/vp_uddchl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qys-84bjk"/><path class="dypeyrb2s"/><path class="vp_uddchl"/></g>`,
		"fallback": "streamline-ultimate:paralympics-football",
	});
}

export default Component;
