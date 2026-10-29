import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kbj8nvb7i.css';
import '../../css/p/ptk50absq.css';
import '../../css/n/nboiatbai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="kbj8nvb7i"/><path class="ptk50absq"/><path class="nboiatbai wm-a"/></g>`,
		"fallback": "withicons:telescope",
	});
}

export default Component;
