import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lnvefqbeo.css';
import '../../css/r/rw0vn_02m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lnvefqbeo"/><path class="rw0vn_02m"/></g>`,
		"fallback": "coolicons:waveform-sparkle-bulk-round",
	});
}

export default Component;
