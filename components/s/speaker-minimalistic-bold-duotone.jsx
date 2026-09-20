import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sng0m5e4g.css';
import '../../css/e/emnqjpbpk.css';
import '../../css/m/m8jecfmey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sng0m5e4g"/><path class="emnqjpbpk"/><path clip-rule="evenodd" class="m8jecfmey"/></g>`,
		"fallback": "solar:speaker-minimalistic-bold-duotone",
	});
}

export default Component;
