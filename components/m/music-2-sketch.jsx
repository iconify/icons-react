import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vgqb-eb6q.css';
import '../../css/b/b9y4teb_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="vgqb-eb6q"/><path class="b9y4teb_e"/></g>`,
		"fallback": "withicons:music-2-sketch",
	});
}

export default Component;
