import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gif58rbjy.css';
import '../../css/z/zr4-guboc.css';
import '../../css/n/nsch9pbtc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gif58rbjy"/><path class="zr4-guboc"/><path class="nsch9pbtc"/></g>`,
		"fallback": "keyline-icons:send-horizontal-sparkles-duotone",
	});
}

export default Component;
