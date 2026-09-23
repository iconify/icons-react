import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/pvq2a3bnf.css';
import '../../css/x/x39lujbyx.css';
import '../../css/c/c6upwkbge.css';
import '../../css/c/ceqt8o39a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="pvq2a3bnf"/><path class="x39lujbyx"/><path class="c6upwkbge"/><path class="ceqt8o39a"/></g>`,
		"fallback": "keyline-icons:scan-text-sparkles-sharp-duotone",
	});
}

export default Component;
