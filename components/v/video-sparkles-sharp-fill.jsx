import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/j/jdnpnfbih.css';
import '../../css/i/iycrsb0fu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="jdnpnfbih"/><path class="iycrsb0fu"/></g>`,
		"fallback": "keyline-icons:video-sparkles-sharp-fill",
	});
}

export default Component;
