import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkbdgob_u.css';
import '../../css/b/ba4pmswhb.css';
import '../../css/k/kvokd1fvk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bkbdgob_u"/><path class="ba4pmswhb"/><path class="kvokd1fvk"/>`,
		"fallback": "fxemoji:speaker3soundwaves",
	});
}

export default Component;
