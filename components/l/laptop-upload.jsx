import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cl-cxlwbu.css';
import '../../css/s/ssn21-aor.css';
import '../../css/w/wkqjalm6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cl-cxlwbu"/><path class="ssn21-aor"/><path class="wkqjalm6n"/></g>`,
		"fallback": "streamline-cyber-color:laptop-upload",
	});
}

export default Component;
