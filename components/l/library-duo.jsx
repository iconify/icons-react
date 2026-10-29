import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fsii3zsmr.css';
import '../../css/j/j7zbqvg7v.css';
import '../../css/i/ik857bg1p.css';
import '../../css/i/iagn37brf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="fsii3zsmr"/><path class="j7zbqvg7v wm-a"/><path class="ik857bg1p wm-a"/><path class="iagn37brf"/></g>`,
		"fallback": "withicons:library-duo",
	});
}

export default Component;
