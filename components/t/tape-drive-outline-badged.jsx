import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/liq-m1brr.css';
import '../../css/l/leog74bne.css';
import '../../css/u/u03d60_zk.css';
import '../../css/l/lmf0ecbhq.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="liq-m1brr"/><path class="leog74bne"/><path class="u03d60_zk"/><circle class="lmf0ecbhq"/>`,
		"fallback": "clarity:tape-drive-outline-badged",
	});
}

export default Component;
