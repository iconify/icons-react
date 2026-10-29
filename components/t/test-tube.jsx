import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/oxujxybvl.css';
import '../../css/x/x91hgebnh.css';
import '../../css/x/xd60-huet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="oxujxybvl"/><path class="x91hgebnh"/><path class="xd60-huet"/></g>`,
		"fallback": "withicons-bauhaus:test-tube",
	});
}

export default Component;
