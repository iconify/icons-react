import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnxnwq8hh.css';
import '../../css/p/po8h0gtik.css';
import '../../css/f/f9qltmizw.css';
import '../../css/r/rrm9xhbvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-k wnxnwq8hh"/><path class="po8h0gtik wm-k"/><path class="f9qltmizw wm-a"/><path class="rrm9xhbvj wm-a"/>`,
		"fallback": "withicons-bauhaus:rabbit",
	});
}

export default Component;
