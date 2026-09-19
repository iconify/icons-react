import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q_0pnfbru.css';
import '../../css/d/dlmynl3yv.css';
import '../../css/n/nvfkmhb3s.css';
import '../../css/l/l_i-3xbit.css';
import '../../css/i/if0zf3brf.css';

const viewBox = {"width":16,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="q_0pnfbru"/><path class="dlmynl3yv"/><path class="nvfkmhb3s"/><path class="l_i-3xbit"/><path class="if0zf3brf"/></g>`,
		"fallback": "si-glyph:network-2",
	});
}

export default Component;
