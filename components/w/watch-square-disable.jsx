import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/x/xhk16vb3f.css';
import '../../css/v/vlokx2fyg.css';
import '../../css/o/oz-flyblx.css';
import '../../css/l/liumvpb1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="xhk16vb3f"/><path class="vlokx2fyg"/><path class="oz-flyblx"/><path class="liumvpb1c"/></g>`,
		"fallback": "streamline-sharp-color:watch-square-disable",
	});
}

export default Component;
