import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o5_vsyb1f.css';
import '../../css/l/lltdpne0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o5_vsyb1f"/><path class="lltdpne0m"/></g>`,
		"fallback": "coolicons:toolbox-duocolor-round",
	});
}

export default Component;
