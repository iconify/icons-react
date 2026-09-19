import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dz9ro_bbx.css';
import '../../css/j/jsjamhb6g.css';
import '../../css/r/rxdutob5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dz9ro_bbx"/><path class="jsjamhb6g"/><path class="rxdutob5m"/></g>`,
		"fallback": "hugeicons:message-preview-01",
	});
}

export default Component;
