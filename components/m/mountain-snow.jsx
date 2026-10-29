import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vy3ejgbnz.css';
import '../../css/i/izzimqm0d.css';
import '../../css/m/mzu9szhwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="vy3ejgbnz"/><path class="izzimqm0d"/><path class="mzu9szhwd"/></g>`,
		"fallback": "withicons-bauhaus:mountain-snow",
	});
}

export default Component;
