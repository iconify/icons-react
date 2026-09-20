import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/b/bebf386mj.css';
import '../../css/o/ox_43wcdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="bebf386mj"/><path class="ox_43wcdf"/></g>`,
		"fallback": "keyline-icons:settings-dot-sharp-two-tone",
	});
}

export default Component;
