import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fwts3rb1g.css';
import '../../css/v/vx2u40beg.css';
import '../../css/n/ndchddcke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="fwts3rb1g"/><path clip-rule="evenodd" class="vx2u40beg"/><path class="ndchddcke"/></g>`,
		"fallback": "lets-icons:user-add-duotone-line",
	});
}

export default Component;
