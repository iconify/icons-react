import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/q/qvtm19pcu.css';
import '../../css/s/s63qubk_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="qvtm19pcu"/><path class="s63qubk_z"/></g>`,
		"fallback": "keyline-icons:square-align-offset-top-sharp-duotone",
	});
}

export default Component;
