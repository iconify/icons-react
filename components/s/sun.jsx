import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/q/qhq7cebcv.css';
import '../../css/v/vhgc4ioby.css';
import '../../css/i/ic_b11b4n.css';
import '../../css/h/hgcgqkb2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="qhq7cebcv"/><path class="vhgc4ioby"/><path class="ic_b11b4n"/><path class="hgcgqkb2t"/></g>`,
		"fallback": "streamline-sharp-color:sun",
	});
}

export default Component;
