import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmgqnccqy.css';
import '../../css/p/pnlwn_bgq.css';
import '../../css/e/e_h1d4ywv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmgqnccqy"/><path class="pnlwn_bgq"/><path class="e_h1d4ywv"/>`,
		"fallback": "token:ist",
	});
}

export default Component;
