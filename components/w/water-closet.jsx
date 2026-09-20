import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrks0fbpf.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/y/yef6_xted.css';
import '../../css/w/wz25ji4rl.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrks0fbpf"/><g clip-rule="evenodd" class="rpvb-o6bq"><path class="yef6_xted"/><path class="wz25ji4rl"/></g>`,
		"fallback": "openmoji:water-closet",
	});
}

export default Component;
