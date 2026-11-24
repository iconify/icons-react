import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sbtg6tbae.css';
import '../../css/n/nrn9y4vna.css';
import '../../css/q/qo5oo6bzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sbtg6tbae"/><path class="nrn9y4vna"/><path class="qo5oo6bzx"/></g>`,
		"fallback": "lucide-extended:lectern-duotone",
	});
}

export default Component;
