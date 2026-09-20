import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/pup7xsbbl.css';
import '../../css/i/i_-uu7jal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="pup7xsbbl"/><path class="i_-uu7jal"/></g>`,
		"fallback": "keyline-icons:milestone-sharp-two-tone",
	});
}

export default Component;
