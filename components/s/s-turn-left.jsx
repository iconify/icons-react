import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/e/efr7i9i9d.css';
import '../../css/o/ofmcgpb_u.css';
import '../../css/g/gy1a9xfxe.css';
import '../../css/j/jo7s7hbft.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="efr7i9i9d"/><path class="ofmcgpb_u"/><path class="gy1a9xfxe"/><circle transform="rotate(-180 12 10)" class="jo7s7hbft"/></g>`,
		"fallback": "icon-park:s-turn-left",
	});
}

export default Component;
