import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/aj7nb3b0g.css';
import '../../css/r/rqpznn91v.css';
import '../../css/d/dyo5hzbdy.css';
import '../../css/g/g7td--57i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="aj7nb3b0g wm-k"/><path class="rqpznn91v wm-a"/><path class="dyo5hzbdy wm-k"/><path class="g7td--57i wm-a"/></g>`,
		"fallback": "withicons:person-running-sketch",
	});
}

export default Component;
