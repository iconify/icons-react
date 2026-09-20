import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in1dviszv.css';
import '../../css/t/tfjq_misc.css';
import '../../css/w/w04x9sayj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in1dviszv"><path class="tfjq_misc"/><path class="w04x9sayj"/></g>`,
		"fallback": "reicon:menu-board",
	});
}

export default Component;
