import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfv7kibpo.css';
import '../../css/d/dfc5wbcbr.css';
import '../../css/u/u_l71ebni.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfv7kibpo"/><path class="dfc5wbcbr"/><path class="u_l71ebni"/>`,
		"fallback": "selfhst:ksuite-mail-dark",
	});
}

export default Component;
