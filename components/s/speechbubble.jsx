import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3trzrbdm.css';
import '../../css/l/lrflrndpo.css';
import '../../css/d/dm5bfnbry.css';
import '../../css/m/m_rznqb0n.css';
import '../../css/i/izcsuhbwt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3trzrbdm"/><circle class="lrflrndpo"/><circle class="dm5bfnbry"/><circle class="m_rznqb0n"/><path class="izcsuhbwt"/>`,
		"fallback": "fxemoji:speechbubble",
	});
}

export default Component;
