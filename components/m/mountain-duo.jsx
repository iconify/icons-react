import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/omloeub3d.css';
import '../../css/t/tzhzk2bji.css';
import '../../css/z/z2v1f6pmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="omloeub3d"/><path class="tzhzk2bji wm-a"/><path class="z2v1f6pmt"/></g>`,
		"fallback": "withicons:mountain-duo",
	});
}

export default Component;
