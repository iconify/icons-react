import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mtrq2abyh.css';
import '../../css/z/zef7o_bgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mtrq2abyh"/><path class="zef7o_bgp"/></g>`,
		"fallback": "keyline-icons:tag-horizontal-start-sparkles-fill",
	});
}

export default Component;
