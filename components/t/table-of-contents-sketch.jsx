import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/runpznbra.css';
import '../../css/b/bux8_gbvv.css';
import '../../css/g/ga7n45b4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="runpznbra wm-k"/><path class="bux8_gbvv wm-k"/><path class="ga7n45b4t wm-a"/></g>`,
		"fallback": "withicons:table-of-contents-sketch",
	});
}

export default Component;
