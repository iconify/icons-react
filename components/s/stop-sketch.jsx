import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/al-1xhl-e.css';
import '../../css/g/gwdlllr-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="al-1xhl-e wm-k"/><path class="gwdlllr-j"/></g>`,
		"fallback": "withicons:stop-sketch",
	});
}

export default Component;
