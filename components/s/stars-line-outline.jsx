import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgnxitxfh.css';
import '../../css/i/ifl-0rxrd.css';
import '../../css/r/rfbdwevqb.css';
import '../../css/h/h2w31x3ew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgnxitxfh"/><path class="ifl-0rxrd"/><path clip-rule="evenodd" class="rfbdwevqb"/><path clip-rule="evenodd" class="h2w31x3ew"/>`,
		"fallback": "solar:stars-line-outline",
	});
}

export default Component;
