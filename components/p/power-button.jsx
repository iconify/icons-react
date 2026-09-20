import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r95n-zylm.css';
import '../../css/o/ovhlzobvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r95n-zylm"/><path class="ovhlzobvl"/></g>`,
		"fallback": "streamline-ultimate-color:power-button",
	});
}

export default Component;
