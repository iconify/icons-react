import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/r/rphf6ybon.css';
import '../../css/q/qzhpufbcw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="rphf6ybon"/><path class="qzhpufbcw"/></g>`,
		"fallback": "keyline-icons:message-plus-sharp-duotone",
	});
}

export default Component;
