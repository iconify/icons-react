import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlf1ngy_p.css';
import '../../css/m/mw_oixbmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlf1ngy_p"/><path clip-rule="evenodd" class="mw_oixbmo"/>`,
		"fallback": "stash:shop-duotone",
	});
}

export default Component;
