import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/q471_irwr.css';
import '../../css/n/nhv4ufbsv.css';
import '../../css/a/a762wedry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="q471_irwr"/><path class="nhv4ufbsv"/><path class="a762wedry"/></g>`,
		"fallback": "withicons:moon-sketch",
	});
}

export default Component;
