import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/iagn37brf.css';
import '../../css/i/ik857bg1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="iagn37brf"/><path class="ik857bg1p wm-a"/></g>`,
		"fallback": "withicons:library",
	});
}

export default Component;
