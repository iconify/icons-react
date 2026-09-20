import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/u8ox48bpd.css';
import '../../css/r/rn26afbsb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="u8ox48bpd"/><path class="rn26afbsb"/></g>`,
		"fallback": "streamline-flex:maximize-2",
	});
}

export default Component;
