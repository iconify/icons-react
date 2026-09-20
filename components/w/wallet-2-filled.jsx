import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dft5_h09g.css';
import '../../css/j/jzfqtdbbl.css';
import '../../css/q/q9cwh3bbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dft5_h09g"/><path class="jzfqtdbbl"/><path class="q9cwh3bbn"/></g>`,
		"fallback": "reicon:wallet-2-filled",
	});
}

export default Component;
