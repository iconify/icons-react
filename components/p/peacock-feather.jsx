import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/srjjn2xrl.css';
import '../../css/d/dl06w5ain.css';
import '../../css/h/h23sgfbdf.css';
import '../../css/m/m3bmrg83i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="srjjn2xrl"/><path class="dl06w5ain"/><path class="h23sgfbdf"/><path class="m3bmrg83i"/></g>`,
		"fallback": "withicons-bauhaus:peacock-feather",
	});
}

export default Component;
