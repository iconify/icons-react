import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/r/rphf6ybon.css';
import '../../css/p/p7m-44b_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="rphf6ybon"/><path class="p7m-44b_f"/></g>`,
		"fallback": "keyline-icons:message-lines-sharp-two-tone",
	});
}

export default Component;
