import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kobakmnrv.css';
import '../../css/r/rcci-d4wx.css';
import '../../css/b/b197rfn0j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kobakmnrv"/><path class="rcci-d4wx"/><path class="b197rfn0j"/>`,
		"fallback": "fxemoji:italianflag",
	});
}

export default Component;
