import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g5vnngb7o.css';
import '../../css/f/f3mi_ybsx.css';
import '../../css/g/gd67pabfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g5vnngb7o"/><path class="f3mi_ybsx"/><path class="gd67pabfk"/></g>`,
		"fallback": "streamline-ultimate:sd-card-download",
	});
}

export default Component;
