import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrks0fbpf.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/g/g13n8vbld.css';
import '../../css/w/wz25ji4rl.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrks0fbpf"/><g class="rpvb-o6bq"><path clip-rule="evenodd" class="g13n8vbld"/><path class="wz25ji4rl"/></g>`,
		"fallback": "openmoji:keycap-7",
	});
}

export default Component;
