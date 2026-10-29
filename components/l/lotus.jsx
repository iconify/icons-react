import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hyo6-jbdx.css';
import '../../css/t/thgy12bbk.css';
import '../../css/r/rshnm_bhy.css';
import '../../css/q/q3d-5jpqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="hyo6-jbdx wm-k"/><path class="thgy12bbk wm-a"/><path class="rshnm_bhy"/><path class="q3d-5jpqn wm-s"/></g>`,
		"fallback": "withicons-bauhaus:lotus",
	});
}

export default Component;
