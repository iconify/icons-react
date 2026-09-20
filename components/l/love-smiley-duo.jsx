import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/municvskz.css';
import '../../css/i/i45xhccnc.css';
import '../../css/p/p-k1abb4n.css';
import '../../css/q/qxptm6b8z.css';
import '../../css/x/xgpqswbwo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="municvskz"/><path class="i45xhccnc"/><path class="p-k1abb4n"/><path clip-rule="evenodd" class="qxptm6b8z"/><path clip-rule="evenodd" class="xgpqswbwo"/></g>`,
		"fallback": "streamline-kameleon-color:love-smiley-duo",
	});
}

export default Component;
