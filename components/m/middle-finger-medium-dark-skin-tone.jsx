import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vf5b9zb0i.css';
import '../../css/o/o6v68ebye.css';
import '../../css/z/z0ory1tln.css';
import '../../css/m/mef-us_ln.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/b/bby26pbfa.css';
import '../../css/s/sit3ftbpc.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vf5b9zb0i"><path class="o6v68ebye"/><path class="z0ory1tln"/><path class="mef-us_ln"/></g><g class="ij2x_72vy"><path class="bby26pbfa"/><path class="sit3ftbpc"/></g>`,
		"fallback": "openmoji:middle-finger-medium-dark-skin-tone",
	});
}

export default Component;
