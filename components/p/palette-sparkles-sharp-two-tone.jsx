import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/y/yzx0mb0bw.css';
import '../../css/t/t8m6ab_md.css';
import '../../css/i/i4pr7mb_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="yzx0mb0bw"/><path class="t8m6ab_md"/><path class="i4pr7mb_p"/></g>`,
		"fallback": "keyline-icons:palette-sparkles-sharp-two-tone",
	});
}

export default Component;
